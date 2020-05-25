import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'fd-time-column',
    templateUrl: './time-column.component.html',
    styleUrls: ['./time-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeColumnComponent {

    readonly ELEMENT_HEIGHT: number = 48;

    @Input()
    rows: number[];

    @Input()
    activeNumber: number = 10;

    @Input()
    active: boolean = false;

    @ViewChild('listElement', {read: ElementRef})
    listElement: ElementRef;

    @ViewChildren('timeItem')
    timeItems: QueryList<ElementRef>;

    scrolled: Subject<void> = new Subject<void>();

    constructor() {
        this.rows = Array.from(Array(60).keys());

        this.scrolled.pipe(
            debounceTime(20)
        ).subscribe(() => this._handleScroll())
    }

    putElementUp(): void {
        this.rows.unshift(this.rows.pop());
    }

    putElementDown(): void {
        this.rows.push(this.rows.shift());
    }

    handleScroll(event): void {
        this.scrolled.next();
        this._throttle(this._handleScroll, 100);
    }

    scrollUp(): void {
        this.listElement.nativeElement.scrollBy({
            top: -54,
            behavior: 'smooth'
        })
    }

    scrollDown(): void {
        this.listElement.nativeElement.scrollBy({
            top: 54,
            behavior: 'smooth'
        })
    }

    private _handleScroll(): void {
        console.log({
            'list': this.listElement.nativeElement.getBoundingClientRect().top,
            'last': this.timeItems.last.nativeElement.getBoundingClientRect().top,
            'first': this.timeItems.first.nativeElement.getBoundingClientRect().top
        });

        if (this.timeItems.first &&
            (this.listElement.nativeElement.getBoundingClientRect().top - this.timeItems.first.nativeElement.getBoundingClientRect().top < this.ELEMENT_HEIGHT)
        ) {
            this.putElementUp();
        } else if (this.timeItems.last &&
            ( this.timeItems.last.nativeElement.getBoundingClientRect().top - this.listElement.nativeElement.getBoundingClientRect().top < this.ELEMENT_HEIGHT )
        ) {
            this.putElementDown();
        }

    }

    private _throttle(func, timeFrame) {
        let lastTime = 0;
        return function () {
            const now = new Date().getTime();
            console.log('123');
            if (now - lastTime >= timeFrame) {
                console.log('redi');
                func();
                lastTime = now;
            }
        };
    }

}
