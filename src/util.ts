export class ArrayUtil {
  public static uniq(arr: any[]): any[] {
    return [...new Set(arr)];
  }
}
