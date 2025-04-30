<script>
import $ from 'jquery' // Pastikan jQuery sudah di-import

export default {
  name: 'YourComponent',
  mounted() {
    // Script yang sudah ada, dimasukkan ke dalam mounted() Vue.js
    const swiper = new Swiper('.portfolioSwiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    $(window).scroll(function () {
      var scroll = $(window).scrollTop()
      var box = $('.header-text').height()
      var header = $('header').height()

      if (scroll >= box - header) {
        $('header').addClass('background-header')
      } else {
        $('header').removeClass('background-header')
      }
    })

    swiper.on('slideChange', function () {
      const activeSlide = swiper.slides[swiper.activeIndex]
      const caption = activeSlide.querySelector('img').alt
      document.getElementById('swiper-caption-text').textContent = caption
    })

    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
      $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active')
        $('.header-area .nav').slideToggle(200)
      })
    }

    // Menu elevator animation
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          var width = $(window).width()
          if (width < 991) {
            $('.menu-trigger').removeClass('active')
            $('.header-area .nav').slideUp(200)
          }
          $('html,body').animate(
            {
              scrollTop: target.offset().top + 1,
            },
            700,
          )
          return false
        }
      }
    })

    $(document).ready(function () {
      $(document).on('scroll', this.onScroll)

      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
        e.preventDefault()
        $(document).off('scroll')

        $('.scroll-to-section a').each(function () {
          $(this).removeClass('active')
        })
        $(this).addClass('active')

        var target = this.hash,
          menu = target
        var target = $(this.hash)
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: target.offset().top + 1,
            },
            500,
            'swing',
            function () {
              window.location.hash = target
              $(document).on('scroll', this.onScroll)
            },
          )
      })
    })

    // Handling scroll and active navigation
    this.onScroll = function () {
      var scrollPos = $(document).scrollTop()
      $('.nav a').each(function () {
        var currLink = $(this)
        var refElement = $(currLink.attr('href'))
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $('.nav ul li a').removeClass('active')
          currLink.addClass('active')
        } else {
          currLink.removeClass('active')
        }
      })
    }

    // Window Resize Mobile Menu Fix
    this.mobileNav = function () {
      var width = $(window).width()
      $('.submenu').on('click', function () {
        if (width < 767) {
          $('.submenu ul').removeClass('active')
          $(this).find('ul').toggleClass('active')
        }
      })
    }
  },
}
</script>

<template>
  <main>
    <!-- Start Section Navbar -->
    <header
      class="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="index.html" class="logo">
                <img
                  src="/assets/images/Logo/Logo-removebg.png"
                  style="height: 50px"
                  alt="Chain App Dev"
                />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section"><a href="#top" class="active">Beranda</a></li>
                <li class="scroll-to-section"><a href="/tentang-kami">Tentang Kami</a></li>
                <li class="scroll-to-section"><a href="#layanan">Layanan Kami</a></li>
                <li class="scroll-to-section"><a href="#portofolio">Portofolio</a></li>
                <li>
                  <div class="btn-navbar-btn">
                    <a href="#cta-section"><i class="fa fa-whatsapp"></i> Hubungi Kami</a>
                  </div>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- End Section -->
    <!-- Start Section Header -->
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div
                  class="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <h2 style="color: #036ece">Transformasikan Bisnis Anda Bersama DiveraTech</h2>
                      <p>
                        Kami siap membantu mempercepat transformasi digital Anda melalui solusi
                        website yang cerdas, efisien, dan dirancang khusus untuk kebutuhan bisnis
                        modern.
                      </p>
                    </div>
                    <div class="col-lg-12 btn-header">
                      <a href="#contact" class="btn btn-header-btn">
                        <i class="fab fa-whatsapp"></i> Jadwalkan Konsultasi Gratis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/right-header.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->

    <!-- Start Section Data Trend -->
    <div id="data" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4 class="text-black">Tren Digital yang Tak Bisa Diabaikan</h4>
              <img src="/assets/images/heading-line-dec.png" alt="" />
              <p class="text-black">
                Data terbaru menunjukkan bahwa bisnis dengan solusi digital sendiri lebih unggul
                dalam loyalitas pelanggan, efisiensi, dan pengalaman pengguna. Saatnya
                bertransformasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Bisnis dengan Aplikasi Sendiri = +35% Loyalitas</h4>
              <p class="text-black">
                Dibandingkan dengan bisnis yang hanya mengandalkan media sosial atau marketplace,
                bisnis dengan aplikasi sendiri memiliki retensi pelanggan 35% lebih tinggi.
                <br /><em>– Adobe Digital Economy Index, 2022</em>
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Efisiensi Operasional Jadi Prioritas</h4>
              <p class="text-black">
                68% UKM memilih aplikasi web internal untuk mempercepat proses kerja dan menghemat
                biaya operasional.
                <br /><em>— Clutch Survey, 2023</em>
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Web Kustom Dambaan Konsumen</h4>
              <p class="text-black">
                76% konsumen lebih memilih brand yang menyediakan pengalaman digital yang konsisten
                di semua platform.
                <br /><em>— Forbes, 2024</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Why Choose Us? -->
    <section id="why-us" class="why-us section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4>Kenapa Harus Pilih <b class="text-blue"> DiveraTech?</b></h4>
              <p class="text-black">
                Lebih dari sekadar penyedia jasa IT, kami adalah partner yang memahami kebutuhan
                bisnis Anda dan memberikan solusi nyata yang berdampak.
              </p>
            </div>
          </div>
        </div>

        <div class="row gy-4 mt-4">
          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🔧</div>
            <div>
              <h5 class="text-blue text-bold">Solusi Web yang Disesuaikan</h5>
              <p class="text-black">
                Kami merancang aplikasi yang benar-benar sesuai dengan karakter dan kebutuhan bisnis
                Anda.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">💡</div>
            <div>
              <h5 class="text-blue text-bold">Tim Profesional & Berkomitmen</h5>
              <p class="text-black">
                Fokus pada kualitas, hasil rapi, responsif, dan tepat waktu adalah komitmen kami di
                setiap proyek.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🔁</div>
            <div>
              <h5 class="text-blue text-bold">Garansi Revisi</h5>
              <p class="text-black">
                Kami memberikan garansi revisi sesuai kesepakatan—karena kepuasan Anda adalah
                prioritas utama kami.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🛠️</div>
            <div>
              <h5 class="text-blue text-bold">Free Maintenance</h5>
              <p class="text-black">
                Kami tetap mendampingi setelah aplikasi selesai dengan layanan perawatan gratis di
                awal masa pakai.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🤝</div>
            <div>
              <h5 class="text-blue text-bold">Komunikasi Terbuka</h5>
              <p class="text-black">
                Anda terlibat dalam proses sejak awal—kami percaya kolaborasi menghasilkan solusi
                yang lebih baik.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">📊</div>
            <div>
              <h5 class="text-blue text-bold">Hasil Terukur</h5>
              <p class="text-black">
                Fokus kami bukan hanya menyelesaikan proyek, tapi menciptakan dampak nyata dan
                terukur untuk bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section Layanan -->
    <div class="layanan section">
      <div class="container">
        <div id="layanan" class="row">
          <!-- Kiri: Deskripsi dan Layanan -->
          <div class="col-lg-6 align-self-center">
            <div class="section-heading">
              <h4>Layanan <b class="text-blue">DiveraTech</b></h4>
              <img src="/assets/images/heading-line-dec.png" alt="" />
              <p class="text-black">
                Kami menyediakan solusi web yang dirancang khusus untuk menunjang kebutuhan digital
                bisnis Anda, dari awal hingga tahap dukungan berkelanjutan.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Landing Page</a></h4>
                  <!-- <p class="text-black">
                    Desain halaman promosi yang menarik dan cepat diakses, cocok untuk kampanye
                    produk atau layanan spesifik.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Company Profile</a></h4>
                  <!-- <p class="text-black">
                    Website profesional yang menampilkan profil, visi, layanan, dan portofolio
                    bisnis Anda secara menyeluruh.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">e-Commerce</a></h4>
                  <!-- <p class="text-black">
                    Sistem toko online lengkap untuk memperluas jangkauan penjualan Anda, aman dan
                    responsif di berbagai perangkat.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Custom Web App</a></h4>
                  <!-- <p class="text-black">
                    Aplikasi web yang dirancang sesuai alur kerja internal bisnis Anda, dari
                    dashboard hingga sistem manajemen data.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Re-desain Website</a></h4>
                  <!-- <p class="text-black">
                    Pembaruan tampilan dan fungsionalitas website lama agar lebih modern, cepat, dan
                    ramah pengguna.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Maintenance & Support</a></h4>
                  <!-- <p class="text-black">
                    Dukungan teknis dan pemeliharaan sistem agar website Anda tetap optimal, aman,
                    dan bebas dari kendala.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-12">
                <!-- <p class="text-black">
                  Kami hadir bukan hanya untuk membuat website, tapi menjadi mitra yang membantu
                  Anda tumbuh lewat solusi digital yang tepat sasaran.
                </p> -->
                <div class="col-lg-12 btn-header">
                  <a href="#contact" class="btn btn-header-btn">
                    <i class="fab fa-whatsapp"></i> Jadwalkan Konsultasi Gratis
                  </a>
                </div>
                <span class="text-black">*Konsultasi gratis untuk semua calon klien</span>
              </div>
            </div>
          </div>

          <!-- Kanan: Gambar -->
          <div class="col-lg-6">
            <div class="right-image">
              <img src="/assets/images/about-right-dec.png" alt="Ilustrasi layanan DiveraTech" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Portfolio -->
    <section id="portofolio" style="padding-top: 70px" class="portfolio section">
      <div class="container">
        <div class="row mt-4 mb-4">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4>Portofolio <b class="text-blue">DiveraTech</b></h4>
              <p class="text-black">
                Beberapa proyek web terbaik yang telah kami bangun bersama klien-klien kami. Klik
                panah untuk melihat lebih banyak karya kami.
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="swiper portfolioSwiper">
            <div class="swiper-wrapper">
              <!-- 9 Slide -->
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/1.png"
                  alt="Bansos Kelurahan Campurrejo"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/2.png"
                  alt="Employee Recruitment System (PT Eternity Tech International)"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/3.png"
                  alt="Sikejar (Posyandu Jambu Kediri)"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/4.png"
                  alt="UsedCar Prediction"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/5.png"
                  alt="Posyandu Kumis Kucing Website"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/6.png"
                  alt="Employment Recruiter System (CV. Multitech Jaya Agung)"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img src="/assets/images/Portfolio/7.png" alt="SentUs.id" class="rounded w-100" />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/8.png"
                  alt="IMNHerbalStore"
                  class="rounded w-100"
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="/assets/images/Portfolio/9.png"
                  alt="Gendifo (Gendro’s Digital Platform)"
                  class="rounded w-100"
                />
              </div>
            </div>
            <div class="swiper-caption text-center">
              <p id="swiper-caption-text">Bansos Kelurahan Campurrejo</p>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Endsection -->

    <!-- Start Section Kalimat Iklan -->
    <div id="cta-section" class="cta-section" style="background-color: #036ece">
      <div class="container">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-12">
            <h2 class="cta-heading">Jangan lewatkan peluang ini!</h2>
            <p class="cta-text">
              Mari bangun citra profesional melalui media digital dan tingkatkan jangkauan interaksi
              dengan pelanggan bersama <b>DiveraTech</b>.
            </p>
            <div class="cta-button">
              <a href="https://wa.me/+6282191927762" class="btn btn-primary" target="_blank"
                ><i class="fab fa-whatsapp"></i> Hubungi Kami</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Contact Us -->
    <section id="contact" class="contact section mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4 class="text-blue">Hubungi Kami</h4>
              <p class="text-black">
                <span class="text-bold-2 d-block mt-2"
                  >Siap ngobrol soal kebutuhan IT Anda? Dapatkan solusi yang lebih baik untuk bisnis
                  Anda dengan bekerjasama bersama ahli yang profesional di bidangnya dengan hubungi
                  kami langsung atau isi form di bawah ini.</span
                >
              </p>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="col-lg-8">
            <form action="https://formspree.io/f/xnndqklq" method="POST">
              <div class="row gy-3">
                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Nama" required />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    placeholder="Telepon"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    name="company"
                    class="form-control"
                    placeholder="Perusahaan (Opsional)"
                  />
                </div>
                <div class="col-12">
                  <textarea
                    name="message"
                    class="form-control"
                    rows="5"
                    placeholder="Pesan"
                    required
                  ></textarea>
                </div>
                <div
                  class="col-12 d-flex justify-content-center gap-3 flex-wrap mt-3 btn-kirim-contact"
                >
                  <button type="submit" class="btn btn-primary px-4 py-2">Kirim Sekarang</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section Footer -->
    <footer id="newsletter">
      <div class="container">
        <div class="row">
          <!-- <div class="col-lg-2"></div> -->
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="footer-widget">
              <h4>About Us</h4>
              <div class="logo">
                <img src="/assets/images/Logo/Logo-White.png" alt="" />
              </div>
              <p>Build Smarter. Launch Faster. With <b class="text-bold">DiveraTech</b></p>
              <p>
                <a href="mailto:diveratech@gmail.com"
                  ><i class="fas fa-envelope"></i> diveratech@gmail.com</a
                >
              </p>
              <p>
                <a href="https://wa.me/+6282191927762"
                  ><i class="fab fa-whatsapp"></i> (+62) 821-9192-7762</a
                >
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="footer-widget">
              <h4>Link</h4>
              <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/tentang-kami">Tentang Kami</a></li>
                <li><a href="#layanan">Layanan Kami</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#cta-section">Hubungi Kami</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="footer-widget">
              <h4>Temukan Kami</h4>
              <ul>
                <li>
                  <a href="#">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.5283834054441!2d112.54795408583715!3d-7.231603532068185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7801bc912dd3d5%3A0xb3adb4ba8a9d9d5!2sDiveraTech!5e0!3m2!1sen!2sid!4v1745601481503!5m2!1sen!2sid"
                      style="border: 0"
                      width="400"
                      height="300"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="copyright-text">
          <p>Copyright © 2025 DiveraTech. All Rights Reserved. <br /></p>
        </div>
      </div>
    </footer>

    <!-- EndSection   -->
  </main>
</template>
