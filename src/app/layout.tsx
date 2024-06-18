import "@/styles/globals.css";

import {
  Aldrich,
  DM_Sans,
  DM_Serif_Display,
  K2D,
  Kdam_Thmor_Pro,
  Orbitron,
  Saira,
} from "next/font/google";

const dm_serif_display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});
const dm_sans = DM_Sans({ subsets: ["latin"] });

const kdam_thmor_pro = Kdam_Thmor_Pro({ weight: "400", subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"] });

export const metadata = {
  title: "Spatial - Xpress Your Zenith",
  description: "We're Spatial - the next revolution in banking.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
      ${dm_serif_display.className} 
      ${dm_sans.className}
      ${saira.className}
      `}
    >
      <body>{children}</body>
    </html>
  );
}
