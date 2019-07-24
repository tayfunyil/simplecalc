import {Component} from '@angular/core';
import {Events} from '@ionic/angular';

import {
    evaluate
} from 'mathjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    inputField = '';
    lastBracket = '';
    lastDeletedCharacter = '';

    constructor() {
    }

    onBracketButtonClick() {
        if (this.lastBracket === '' || this.lastBracket === ')') {
            this.onDefaultButtonClick('(');
            this.lastBracket = '(';
        } else {
            this.onDefaultButtonClick(')');
            this.lastBracket = ')';
        }
    }

    onDefaultButtonClick(event) {
        this.inputField += event;
    }

    onResultButtonClick() {
        this.inputField = evaluate(this.inputField);
    }

    swipeDownEvent() {
        this.onResultButtonClick();
    }

    onClearButtonClick() {
        this.inputField = '';
    }

    swipeUpEvent() {
        this.onClearButtonClick();
    }

    onInputClick() {
        this.inputField = this.inputField.substring(0, this.inputField.length - 1);
    }

    swipeLeftEvent() {
        this.lastDeletedCharacter = this.inputField[this.inputField.length - 1];
        this.inputField = this.inputField.substring(0, this.inputField.length - 1);
    }

    swipeRightEvent() {
        this.inputField += this.lastDeletedCharacter;
    }

}
