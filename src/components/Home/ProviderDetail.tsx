import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import MessageFill from '@/assets/svgs/message-fill.svg?react';
import avatarImg from '@/assets/images/avatar.png';
export default function ProviderDetail() {
    return (
        <div className="flex gap-10">
            <Avatar className="size-54 rounded-2xl ">
                <AvatarImage src={avatarImg} alt="@shadcn" className="object-cover" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex w-full  justify-between items-start mb-3">
                    <div>
                        <h1 className="text-2xl font-bold">John Doe</h1>
                        <div className="flex items-center gap-1 mr-2">
                            <Star className="text-yellow-500 size-4" />
                            <span className="text-muted-foreground">4.9 (120)</span>
                        </div>
                    </div>
                    <div>
                        <MessageFill className="size-6 text-primary" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">About</h1>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quis unde
                        eveniet culpa impedit, nostrum consectetur consequuntur, quos aliquid
                        repellendus hic necessitatibus consequatur iusto fuga quia maxime provident
                        quod natus nobis ratione nulla est adipisci et? Asperiores architecto totam
                        laboriosam? Nulla deserunt dolor quo cum distinctio possimus enim obcaecati
                        accusantium voluptates soluta, praesentium vel, dolorem exercitationem!
                        Cumque impedit sequi qui id sunt, quaerat voluptatum voluptas, eveniet
                        laboriosam expedita ratione ipsam explicabo? Hic vero commodi molestias a
                        assumenda omnis vel perspiciatis. Veritatis est aut laboriosam doloremque
                        facilis iste unde ad accusantium. Sed, quas laborum neque quidem nostrum
                        voluptatem numquam quisquam labore?
                    </p>
                </div>
            </div>
        </div>
    );
}
