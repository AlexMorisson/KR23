import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('popup')
  private popup!: ElementRef;
  private observable: Observable<ElementRef>;
  private subscription: Subscription | null = null;
  public panels: {title: string, description: string}[] = [
    {
      title: 'Собираете ли вы подарочные боксы?',
      description: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      title: 'Сколько у вас разновидностей чая?',
      description: 'У нас 6 основных видов чая, которые производятся из чайного листа: черный, зеленый,\n' +
        '          белый, желтый, улун и пуэр.'
    },
    {
      title: 'В какой срок осуществляется доставка?',
      description: 'В среднем, время доставки посылки занимает около 5 дней.'
    },
    {
      title: 'У вас обновляется ассортимент?',
      description: 'Обновление всех категорий товаров - один, два раза в неделю.'
    },
    {
      title: 'Какого объема у вас пачки чая?',
      description: 'От 50 грамм до 500 грамм.'
    },
  ];


  constructor(private modalService: NgbModal) {
    this.observable = new Observable(observer => {
      const timeout = setTimeout(() => {
        observer.next(this.popup);
      }, 10000);
      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    })
  }

  ngOnInit() {
    this.subscription = this.observable.subscribe(
      {
        next: (popup) => {
          this.modalService.open(popup);
        },
        error: (error: string) => {
          console.log(error);
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
