import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { OrderStatusPipe } from '../pipes/order-status.pipe';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, OrderStatusPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders = [
    { id: 1, item: 'Laptop',     price: 1299.99, date: new Date('2026-01-15'), status: 'delivered'  },
    { id: 2, item: 'Headphones', price: 199.50,  date: new Date('2026-03-22'), status: 'shipped'    },
    { id: 3, item: 'Keyboard',   price: 89.00,   date: new Date('2026-04-10'), status: 'processing' },
    { id: 4, item: 'Monitor',    price: 549.00,  date: new Date('2026-04-17'), status: 'pending'    },
    { id: 5, item: 'Mouse',      price: 45.00,   date: new Date('2026-02-05'), status: 'cancelled'  },
  ];
}
