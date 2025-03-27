import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
    name: 'creatorCase'
})
export class CreatorCasePipe implements PipeTransform {
    transform(value: Creator): any {
        return Creator[value];
    }
}