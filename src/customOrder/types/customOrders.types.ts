export enum ECustomOrderSizes {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}

export enum ECustomPrintTypes {
  DIGITAL = "Digital",
  CANVAS = "Canvas",
  PRINT = "Print",
}

export enum ECustomOrderCompletionStatus {
  IN_PROGRESS = "In Progress",
  SHIPPED = "Shipped",
  COMPLETED = "Completed",
  CANCELED = "Canceled",
}

export interface CreateCustomOrderDto {
  userId: string;

  size?: ECustomOrderSizes;

  printType: ECustomPrintTypes;

  title: string;

  images: string;
}
