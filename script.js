const links = {
    portSecurity: "https://youtu.be/2GZn5si3GUM?si=wNKwFdcXstqiCLp0",
    vlanTrunking: "https://youtu.be/Nl8p5K8wq_M?si=dItkqeRU9QiGzKBG",
    remoteAccess: "https://youtu.be/tw2mUcziOxg?si=zVqM7ehdRVeruTuO",
    website: "https://www.smkn2baleendah.sch.id/",
    instagram: "https://www.instagram.com/smkn2be?igsh=MTE4M2U3dTVzcTlkMA==",
    facebook: "https://www.facebook.com/example",
    galeri: "https://www.example.com/galeri",
    alamat: "https://maps.app.goo.gl/rVRPsQALL7FZs3zSA",
    email: "smknduabaleendahbdg@gmail.com" // ✅ Email sudah benar
};

// Pastikan hanya menambahkan event listener jika elemen ada
Object.keys(links).forEach(id => {
    let element = document.getElementById(id);
    if (element) { 
        element.addEventListener("click", () => {
            if (id === "email") {
                window.location.href = `mailto:${links[id]}`; // ✅ Sekarang email bisa diklik
            } else {
                window.open(links[id], "_blank");
            }
        });
    }
});

// Event listener untuk kontak
document.getElementById("kontak").addEventListener("click", () => {
    alert("Kontak Sekolah: +62 812-3456-7890");
});
