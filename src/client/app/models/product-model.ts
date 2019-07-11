export interface ProductModel {

        archived: boolean;
        boxSize: number;
        category: string;
        cutoff: number;
        deliveryDays:
         { friday: boolean;
           monday: boolean;
           saturday: boolean;
           thursday: boolean;
           tuesday: boolean;
           wednesday: boolean };
        description:string;
        fisherId: string;
        hidden: boolean;
        imageUrl:string;
        leadTime:number;
        name: string;
        productId: string;
        purchasePrice: number;
        minQuantity: number;
        regionId: string;
        selectedDay: string;
        sellingPrice: number;
        timestamp: string;
        trackingId: string;
        unitQuantity: string;
        orderQuantity: number;
}
