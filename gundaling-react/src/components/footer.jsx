function Footer() {
    return (
        <footer className="bg-[#002366] border-t border-[#334155] pt-[25px]">

            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-start gap-[80px]">

                <div>

                    <h2 className="text-white text-[24px] font-bold mb-[15px]">
                        Hubungi Kami
                    </h2>

                    <p className="text-[#dbeafe] text-[15px] leading-[1.7] m-0">
                        Jalan HM Yamin SH 347 Medan
                        <br />
                        081260099970 - 0813795220290
                    </p>

                </div>

                <div className="text-right">

                    <h2 className="text-white text-[24px] font-bold mb-[15px]">
                        Visi & Misi
                    </h2>

                    <p className="text-[#dbeafe] text-[15px] leading-[1.7] m-0">
                        Visi: Menjadi grosir perlengkapan depot air terpercaya.
                        <br />
                        Misi: Menyediakan produk berkualitas dan terjangkau.
                    </p>

                </div>

            </div>

            <div className="border-t border-white/30 mt-[25px]">

                <div className="max-w-[1200px] mx-auto px-6">

                    <p className="text-[#cbd5e1] text-center text-[15px] py-[18px] m-0">
                        &copy; 2026 Pusat Grosir Depot Air Minum Gundaling.
                        All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;