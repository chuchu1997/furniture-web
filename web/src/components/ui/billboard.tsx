// /** @format */

// import { Billboard } from "@/types/ProjectInterface";

// interface BillboardProps {
//   data: Billboard;
// }

// const BillboardLayout: React.FC<BillboardProps> = ({ data }) => {
//   return (
//     <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
//       <div
//         className="rounded-xl relative aspect-[2.4/1]  md:aspect-[4.4/1] overflow-hidden bg-cover bg-no-repeat"
//         style={{ backgroundImage: `url(${data.imageUrl})` }}>
//         <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
//           <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
//             {data.label}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillboardLayout;
