import exp from 'constants';
import { Lusitana ,Montserrat, Inter, Montserrat_Alternates, Open_Sans } from 'next/font/google'

export const open_sans = Open_Sans({ subsets: ['latin'] });
export const inter = Inter({ subsets: ['latin'] });
export const montserrat = Montserrat({subsets: ['latin']});
export const lusitana = Lusitana({ weight: ['400','700'], subsets: ['latin']})
export const montserrat_alternates = Montserrat_Alternates({weight: ['400','700'], subsets: ['latin']});