$(document).ready(function() {
    // Animasi saat sidebar toggle di klik
    $('#nav-toggle').on('click', function() {
        $('#nav-content').toggleClass('collapsed');
        $('#nav-footer').toggleClass('collapsed');
    });

    // Menambahkan efek cahaya pada menu saat di klik
    $('.nav-button').on('click', function() {
        // Menghapus efek dari elemen lain
        $('.nav-button').removeClass('active');
        
        // Menambahkan kelas 'active' ke elemen yang diklik
        $(this).addClass('active');
        
        // Animasi highlight
        let index = $(this).index();
        let topPosition = index * 54 + 16; // Mengatur posisi berdasarkan tinggi menu
        $('#nav-content-highlight').stop().animate({ top: topPosition + 'px' }, 300);
    });

    // Efek hover pada menu item untuk menambahkan bayangan cahaya
    $('.nav-button').hover(
        function() {
            $(this).css('box-shadow', '0 0 8px 2px rgba(255, 255, 255, 0.8)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );

    // Efek footer saat diklik untuk memperlihatkan dan menyembunyikan
    $('#nav-footer-toggle').on('click', function() {
        $('#nav-footer-content').slideToggle(300);
    });

    // Animasi fade-in untuk avatar di footer
    $('#nav-footer-avatar').hover(
        function() {
            $(this).find('img').stop().fadeTo(300, 0.7); // Mengurangi opacity saat hover
        },
        function() {
            $(this).find('img').stop().fadeTo(300, 1); // Mengembalikan opacity saat keluar dari hover
        }
    );
});
