import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty or contain number');
    }
    const uniqueid = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueid}`;
  }

  public getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratedIds;
  }

  public generateUniqueId(): string {
    return uuidv4();
  }
}
