import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function TextContainerHIT(props)
{
    return(<div className="flex flex-col gap-5">
    <div className={'font-medium text-2xl ' + inter.className}>{props.title}</div>
    <div className={ 'text-[#bfbfbf] ' + inter.className}>
{props.content}</div>
    </div>)
}