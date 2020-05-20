import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'fd-time-column',
    templateUrl: './time-column.component.html',
    styleUrls: ['./time-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeColumnComponent implements OnInit {

    @Input()
    rows: number[];

    @Input()
    activeNumber: number = 10;

    @Input()
    active: boolean = false;

    @ViewChild('listElement', {read: ElementRef})
    listElement: ElementRef;


    constructor() {
        this.rows = Array.from(Array(60).keys());
    }

    putElementUp(): void {
        this.rows.unshift(this.rows.pop());
    }

    putElementDown(): void {
        this.rows.push(this.rows.shift());
    }

    handleScroll(event): void {
        console.log(event);
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

}
