import { Poppins } from "next/font/google";

import "@/assets/css/bootstrap.css"
import "@/assets/css/style.css"
import "@/assets/css/google-icons.css"
import Layoutauth from "@/utils/Layoutauth";


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'], // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
})


export const metadata = {
  title: "PTS",
  description: "pts",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={poppins.className}>
        
       <Layoutauth data={children}/>
      
      </body>
    </html>
  );
}
