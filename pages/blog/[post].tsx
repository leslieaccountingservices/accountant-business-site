import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Post({ type }: { type: string }) {
    return (
        <>
            <Header page="post" />
            <main>

            </main>
            <Footer />
        </>
    )
}

function Listicle() {
    return (
        <main>

        </main>
    )
}

function OtherType() {
    
}