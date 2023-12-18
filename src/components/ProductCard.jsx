import { FormatRupiah } from "@arismun/format-rupiah";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";

export function ProductCard({ data }) {
  const { name, imageUrl, price, priceDiscount } = data;
  return (
    <Card
      shadow={false}
      className=" w-1/2 md:w-1/3  lg:w-1/4 border-2 border-r-0"
    >
      <CardHeader shadow={false} floated={false} className=" h-64">
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className=" pt-2">
        <div className="mb-2 items-center justify-between">
          <div className=" flex items-center">
            <div className=" flex-1 text-brown-500 font-poppins text-sm font-semibold">
              <FormatRupiah value={price} />
            </div>
            <div className=" text-brown-500 font-poppins text-xs font-normal line-through">
              <FormatRupiah value={priceDiscount} />
            </div>
          </div>
          <div className=" text-sm text-brown-300 py-2">{name}</div>
          <div className=" text-brown-500 font-poppins text-xs font-normal">
            Gratis Ongkir*
          </div>
        </div>
        <div className=" pt-2">
          <Button
            size="sm"
            fullWidth
            color="white"
            className="flex items-center gap-3 normal-case text-sm font-poppins font-normal"
          >
            <img
              src="https://www.svgrepo.com/show/134581/whatsapp.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Pesan Sekarang
          </Button>
          <div className=" mt-2">
            <Button
              size="sm"
              fullWidth
              color="white"
              className="flex items-center gap-3 normal-case text-sm font-poppins font-normal"
            >
              <img
                src="https://sunrisedaycamp.org/wp-content/uploads/2022/05/tiktok-logo.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              Lihat di TikTok
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
