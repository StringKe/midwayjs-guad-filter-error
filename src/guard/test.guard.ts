import { Guard, IGuard } from '@midwayjs/core';

@Guard()
export class TestGuard implements IGuard {
  public canActivate(
    ctx: unknown,
    supplierClz: { new (...args: any[]): any },
    methodName: string
  ): boolean | Promise<boolean> {
    return false;
  }
}
