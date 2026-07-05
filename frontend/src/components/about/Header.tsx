export default function Header() {
    return (
        <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#2563eb] text-white px-4 sm:px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563eb]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-2xl" />

            <div className="relative max-w-6xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase border-2 bg-white/10 text-white border-white/30 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    About Us
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                    Passionate about
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white mt-1">
                        Maths & Science.
                    </span>
                </h1>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                    Frontliners Group was started to give every South African learner access to the kind of support that actually works.
                </p>
            </div>
        </div>
    );
}