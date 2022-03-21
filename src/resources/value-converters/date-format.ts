export class DateFormatValueConverter {
  toView(value: Date) {
    // convert date to dd MMM yyyy
    return value.toLocaleDateString() + " " + value.toLocaleTimeString();
  }

  fromView(value) {
    //
  }
}
