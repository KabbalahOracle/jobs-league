import { LocationChangeEvent } from '@angular/common';

export interface Value {
    id: number;
    desc: string;
    ethAccount: string;
    type: string;
    source: string;
    potential: string;
    dollarV: number;
    nisV: number;
    pMarket: string;
    cAddress: string;
  }