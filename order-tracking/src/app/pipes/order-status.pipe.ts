import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderStatus', standalone: true })
export class OrderStatusPipe implements PipeTransform {
  transform(status: string): string {
    if (status === 'pending') {
      return 'Pending';
    } else if (status === 'processing') {
      return 'Processing';
    } else if (status === 'shipped') {
      return 'Shipped';
    } else if (status === 'delivered') {
      return 'Delivered';
    } else if (status === 'cancelled') {
      return 'Cancelled';
    } else {
      return status;
    }
  }
}
