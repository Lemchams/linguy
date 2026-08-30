import { 
  ClerkLoaded, 
  ClerkLoading, 
  Show,           // <-- On importe le nouveau composant magique
  SignInButton, 
  UserButton 
} from "@clerk/nextjs";

import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-5xl mx-auto flex items-center justify-between h-full">
                {/* LOGO */}
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/gemini-mascot.png" height={60} width={60} alt="Mascot"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Linguy</h1>
                </div>

                {/* ÉCRAN DE CHARGEMENT */}
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>

                {/* LOGIQUE APPRÈS CHARGEMENT */}
                <ClerkLoaded>
                    {/* SI L'UTILISATEUR EST CONNECTÉ */}
                    <Show when="signed-in">
                        <UserButton forceRedirectUrl="/" />
                    </Show>

                    {/* SI L'UTILISATEUR EST DÉCONNECTÉ */}
                    <Show when="signed-out">
                        {/* Note : forceRedirectUrl remplace afterSignInUrl en v5 */}
                        <SignInButton 
                            mode="modal" 
                            forceRedirectUrl="/learn"
                        >
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>
                        </SignInButton>
                    </Show>
                </ClerkLoaded>
            </div>
        </header>
    );
};