import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

let timeColumnUniqueId: number = 0;

@Component({
    selector: 'fd-time-column',
    templateUrl: './time-column.component.html',
    styleUrls: ['./time-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeColumnComponent implements AfterViewInit {
    readonly offset: number = 150;

    @Input()
    rows: number[];

    @Input()
    activeNumber: number = 10;

    @Input()
    active: boolean = false;

    @Input()
    id: string = 'fd-time-column-' + timeColumnUniqueId++;

    @ViewChild('listElement', {read: ElementRef})
    listElement: ElementRef;

    @ViewChildren('timeItem')
    timeItems: QueryList<ElementRef>;

    scrolled: Subject<any> = new Subject<any>();

    currentIndicatorId: string = this.id + '-current-indicator';

    constructor() {
        this.rows = [
            ...Array.from(Array(60).keys())
        ];

        this.scrolled.pipe(
            tap(event => event.preventDefault()),
            debounceTime(20)
        ).subscribe(event => {
        })
    }

    ngAfterViewInit(): void {
        const time = this.activeNumber;
        this.activeNumber = 3;
        this._pickTime(time);
    }

    getId(num: number): string {
        return this.id + '-' + num
    }

    putElementsUp(): void {
        for (let i = 0; i < 10; i ++) {
            this.rows.unshift(this.rows.pop());
        }
    }

    putElementsDown(): void {
        for (let i = 0; i < 10; i ++) {
            this.rows.push(this.rows.shift());
        }
    }

    handleScroll(event): void {
        this.scrolled.next(event);
    }

    pick(num: number): void {
        this._pickTime(num);
    }

    scrollUp(): void {
        this._pickTime(this.activeNumber - 1);
    }

    scrollDown(): void {
        this._pickTime(this.activeNumber + 1);
    }

    private _handleScroll(): void {
        const listElement = this.listElement.nativeElement;
        if (listElement.offsetHeight + listElement.scrollTop > (listElement.scrollHeight - this.offset)) {
            this.putElementsDown();
        } else if (listElement.scrollTop < this.offset) {
            this.putElementsUp();
        }
    }

    private _pickTime(num: number): void {
        const id = this.getId(num);
        this._scrollBy(id);
        this.activeNumber = num;
    }

    private _scrollBy(newId: string): void {
        const currentElement = document.getElementById(this.getId(this.activeNumber));
        const indicator = document.getElementById(this.currentIndicatorId);
        const newElement = document.getElementById(newId);

        console.log({
            currentElement: currentElement.offsetTop,
            indicator: indicator.offsetTop,
            newElement: newElement.offsetTop
        });

        const distance: number = newElement.offsetTop - currentElement.offsetTop;
        this.listElement.nativeElement.scrollBy({
            top: distance,
            behavior: 'smooth'
        });

        this._handleScroll();
    }
}
