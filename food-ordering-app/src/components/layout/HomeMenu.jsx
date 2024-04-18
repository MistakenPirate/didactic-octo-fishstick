import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from '@/components/layout/SectionHeaders'

export default function HomeMenu() {
    return (
        <section>
            <div className='absolute left-0 right-0 w-full'>
                <div className='absolute -top-[70px] left-0 -z-10'>
                    <Image src={"/sallad1.png"} width={109} height={189} alt={"salad"}></Image>
                </div>
                <div className='h-48 absolute  -top-[100px] right-0 -z-10'>
                    <Image src={"/sallad2.png"} width={107} height={195} alt={"salad"}></Image>
                </div>
            </div>

            <div className="text-center mb-4">
                <SectionHeaders subHeader={'check out'} mainHeader={'Menu'}/>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>

        </section>
    )
}