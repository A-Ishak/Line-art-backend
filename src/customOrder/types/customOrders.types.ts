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
  customerEmail: string;

  size: ECustomOrderSizes;

  printType: ECustomPrintTypes;

  title: string;

  images: string;
}

export interface UpdateCustomOrderStatusDto {
  updatedStatus: ECustomOrderCompletionStatus;
  orderId: string;
}
