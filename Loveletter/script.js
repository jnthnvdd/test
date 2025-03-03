// Open the love letter modal ONLY when clicked
function openModal() {
    const modal = document.getElementById("loveModal");

    // Check if the modal is already open to prevent unnecessary re-triggering
    if (modal.style.display === "flex") return;

    // Long Love Letter Content
    const longLoveLetter = `
        Sa pinaka mamahal ko,  
        
        Sa bawat araw na kasama ka ay isang napakalaking blessing para sa akin, lab thank you for your life. Thank you sa pagmamahal, sa pagiging kaibigan, at minsan ay kaaway.
        
        Hindi ko man alam specifically ang mga silent battles na dinaanan mo sa buhay, alam ko na ang Lord ang nakakaalam ng long standing prayers mo lab. Hindi ko man 
        madalas sabihin to pero you are always included in my prayers. Whatever you are going through, whatever the conversation between you and God, alam ko 
        na ang Lord bahala sa iyo. Whatever struggles man yan. I know na kaya mo yan.

        Alam ko na may mga bagay ka na hindi shineshare pero I know na kaya mo yan. Lab, as I always say, all things works together for good. Hindi ko alam pero eto ang conviction
        sa akin na gawin kong klase ng long message, I don't know why pero baka you need to here this.

        I may not be the perfect boyfriend, pero tatandaan mo na kahit isang tenga lang ang gumagana sa akin, handang handang makinig yung kaliwang tenga ko na gumagana para sayo,
        Handa akong makinig sa mga kwento mo, problema at pangarap na gusto mo pang abutin.

        I got you always lab, kahit makulit ako, bwisit man ako o naiinis ka sakin lagi. Sakit man ako sa ulo mo pero nandito ako palagi para sayo. Promise ko sayo yan!! 
        If ever nabibigatan ka na sa mga bagay bagay, hindi mo naman kailangan buhatin magisa. If the world is overwhelming, you can call me and I will help you carry the weight.

        Lab, I am proud of you, proud ako kasi strong ka. You are such an amazing person. 
        I am proud of you for being able to smile even when you are hurting. Lab when life's tough, tandaan mo nandito ako. 
        Lab nandito ako palagi. Si othan mo, sayong sayo, sa hirap at ginhawa.  

        Mahal kita, mahal na mahal kita. Pipiliin kita, palagi. 
        
        Yours truly,  
        Lab ❤️
    `;

    document.getElementById("modalMessage").innerHTML = longLoveLetter.replace(/\n/g, "<br>"); // Keeps line breaks
    modal.style.display = "flex";
}

// Close the modal when clicking the close button or outside the modal
function closeModal() {
    document.getElementById("loveModal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("loveModal");
    if (event.target === modal) {
        closeModal();
    }
};
