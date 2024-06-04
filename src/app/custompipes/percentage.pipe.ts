import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'percentage'
})

export class PercentagePipe implements PipeTransform {
    transform(value:number, total:number, length: number = 0){
        return (value * 100 / total).toFixed(length)
    }
}