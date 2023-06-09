import { Timestamp } from "firebase/firestore";

type Props = {
  id: string;
  amount: number;
  items: any;
  date: Date;
  images: string[];
};

export default function Order({ id, amount, items, date, images }: Props) {
  //   const date = new Date(timestamp.toString()).toISOString();
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDERS PLACED</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>{"₹ " + amount}</p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-teal-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER# {id}
        </p>
      </div>
      <div className="p-5 sm:p10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
