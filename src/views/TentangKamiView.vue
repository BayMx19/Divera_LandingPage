<script>
import $ from 'jquery'
export default {
  created() {},
  name: 'YourComponent',
  data() {
    return {
      kategoriAktif: 'all',
      kategoriList: [
        { label: 'Semua', value: 'all' },
        { label: 'Website Development', value: 'web' },
        { label: 'Mobile Development', value: 'mobile' },
        // { label: 'UI/UX Design', value: 'uiux' },
      ],
    }
  },
  mounted() {
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
    // this.initSwiper()
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

    if ($('.menu-trigger').length) {
      $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active')
        $('.header-area .nav').slideToggle(200)
      })
    }

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

    this.mobileNav = function () {
      var width = $(window).width()
      $('.submenu').on('click', function () {
        if (width < 767) {
          $('.submenu ul').removeClass('active')
          $(this).find('ul').toggleClass('active')
        }
      })
    }
    const startYear = 2025
    const currentYear = new Date().getFullYear()
    const yearText = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`
    document.getElementById('copyright').innerHTML =
      `Copyright © ${yearText} <b>DiveraTech</b>. All Rights Reserved. <br />`
  },
  methods: {
    filterPortfolio(category) {
      const slides = document.querySelectorAll('.portfolioSwiper .swiper-slide')
      let visibleCount = 0
      slides.forEach((slide) => {
        const cat = slide.getAttribute('data-category')
        if (category === 'all' || cat === category) {
          slide.style.display = 'block'
          visibleCount++
        } else {
          slide.style.display = 'none'
        }
      })

      // Optional: Reset Swiper to index 0
      const swiperInstance = document.querySelector('.portfolioSwiper')?.swiper
      if (swiperInstance) swiperInstance.slideTo(0)
      const captionText = document.getElementById('swiper-caption-text')
      if (visibleCount === 0) {
        captionText.innerText = 'Tidak ada data'
      } else {
        // Ambil alt dari slide pertama yang masih terlihat
        const firstVisible = Array.from(slides).find((s) => s.style.display !== 'none')
        if (firstVisible) {
          const img = firstVisible.querySelector('img')
          captionText.innerText = img?.alt || ''
        }
      }
    },
    gantiKategori(kategori) {
      this.kategoriAktif = kategori
      this.$nextTick(() => {
        this.filterPortfolio(kategori)
      })
    },
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
                <li class="scroll-to-section"><a href="/">Beranda</a></li>
                <li class="scroll-to-section">
                  <a href="/tentang-kami" class="active">Tentang Kami</a>
                </li>
                <li class="scroll-to-section"><a href="/#layanan">Layanan Kami</a></li>
                <li class="scroll-to-section"><a href="/#portofolio">Portofolio</a></li>
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
                      <h2 style="color: #036ece">Tentang Kami</h2>
                      <p class="motto" style="font-size: 1.2rem; font-weight: 500">
                        “Build Smarter. Launch Faster. With DiveraTech”
                      </p>
                    </div>
                    <div class="col-lg-12 btn-header">
                      <a href="#cta-section" class="btn btn-header-btn">
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
                  <img src="/assets/images/tentang-kami.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->

    <!-- Start Section What-Is? -->
    <section id="what-is" class="why-us section" style="padding-top: 0px !important">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4>Apa itu <b class="text-blue"> DiveraTech?</b></h4>
              <p class="text-black text-weight-400">
                <b class="text-blue">DiveraTech</b> adalah mitra terpercaya yang hadir dan berfokus
                pada pembuatan aplikasi website, aplikasi mobile, dan solusi teknologi kustom untuk
                membantu Anda membangun solusi teknologi yang cerdas dan efisien. Kami tidak hanya
                fokus pada pembuatan aplikasi, tetapi juga berkomitmen untuk menciptakan nilai
                tambah dan meningkatkan efisiensi melalui teknologi yang tepat sasaran dan sesuai
                dengan kebutuhan bisnis Anda. Kami telah melayani berbagai klien dari berbagai
                sektor untuk menciptakan sistem yang relevan dan berdampak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section Deskripsi -->
    <section class="Komitmen">
      <div class="komitmen-wrapper">
        <div class="komitmen-text">
          <h3 class="text-blue text-bold mb-2">Komitmen Kami</h3>
          <p class="text-weight-400 mb-1" style="text-align: justify !important">
            Di <b class="text-blue">DiveraTech</b>, kami lebih dari sekadar membangun aplikasi
            website dan mobile. Kami juga mengembangkan sistem informasi berbasis web, dashboard
            analitik, dan solusi teknologi custom yang dirancang khusus untuk memenuhi kebutuhan
            unik bisnis Anda.
          </p>
          <p class="text-weight-400 mb-1" style="text-align: justify !important">
            Kami percaya bahwa teknologi harus menyederhanakan, bukan memperumit. Karena itu, kami
            berkomitmen untuk:
          </p>
          <ul>
            <li><b>Menyederhanakan proses teknologi</b></li>
            <li><b>Memaksimalkan fungsi setiap solusi</b></li>
            <li><b>Menciptakan solusi yang berdampak nyata bagi bisnis Anda</b></li>
          </ul>
        </div>
        <div class="komitmen-image">
          <img src="/assets/images/office.png" alt="Tim DiveraTech bekerja bersama" />
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section VMV -->
    <section class="vmv-section">
      <h2>Visi, Misi, dan Nilai - Nilai Kami</h2>
      <div class="vmv-cards">
        <!-- Visi -->
        <div class="vmv-card">
          <h3>Visi</h3>
          <ul>
            <li>
              Menjadi penyedia solusi teknologi digital terkemuka yang memberdayakan bisnis melalui
              inovasi dan teknologi yang mudah diakses, efisien, dan berdampak besar.
            </li>
          </ul>
        </div>

        <!-- Misi -->
        <div class="vmv-card">
          <h3>Misi</h3>
          <ul>
            <li>
              Menghadirkan solusi teknologi yang disesuaikan dengan kebutuhan unik setiap klien,
              membantu mereka mencapai tujuan bisnis secara efektif.
            </li>
            <li>
              Menyederhanakan teknologi kompleks agar lebih mudah dipahami dan diterapkan, baik oleh
              individu maupun organisasi.
            </li>
            <li>
              Membantu klien mempercepat transformasi digital dengan menghadirkan layanan cepat,
              berkualitas, dan berdampak positif.
            </li>
            <li>
              Terus berinovasi untuk menghadirkan layanan teknologi terbaru yang relevan dan
              mendukung perkembangan industri klien kami.
            </li>
          </ul>
        </div>

        <!-- Nilai-nilai -->
        <div class="vmv-card">
          <h3>Nilai - Nilai</h3>
          <ul>
            <li>
              <strong>Inovasi:</strong> Kami berkomitmen untuk selalu mencari solusi terbaru dan
              paling relevan dalam dunia teknologi.
            </li>
            <li>
              <strong>Kualitas:</strong> Setiap produk dan layanan yang kami berikan harus memenuhi
              standar tinggi kualitas untuk mendukung kesuksesan klien.
            </li>
            <li>
              <strong>Kolaborasi:</strong> Kami percaya bahwa kerja sama tim yang solid dengan klien
              menghasilkan solusi terbaik dan dampak yang lebih besar.
            </li>
            <li>
              <strong>Kepercayaan:</strong> Kami membangun hubungan jangka panjang dengan klien
              berdasarkan kepercayaan, transparansi, dan integritas.
            </li>
            <li>
              <strong>Pelanggan adalah Prioritas:</strong> Kepuasan klien adalah tujuan utama kami,
              dan kami selalu siap mendengarkan serta memenuhi kebutuhan mereka.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section Kalimat Iklan -->
    <div id="cta-section" class="cta-section" style="background-color: #036ece">
      <div class="container">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-12">
            <h2 class="cta-heading">Siap bertransformasi secara digital bersama DiveraTech?</h2>
            <div class="cta-button">
              <a
                href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
                class="btn btn-primary"
                target="_blank"
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
                <span class="text-bold-2 d-block mt-2 text-weight-400"
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
              <p class="text-weight-400">
                Build Smarter. Launch Faster. With <b class="text-bold">DiveraTech</b>
              </p>
              <p class="text-weight-400" style="text-align: justify !important">
                DiveraTech adalah mitra terpercaya untuk pengembangan aplikasi website dan mobile
                yang efisien dan tepat sasaran dengan harga terjangkau
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12">
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
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="footer-widget">
              <h4>Hubungi Kami</h4>
              <ul>
                <li>
                  <a href="mailto:diveratech@gmail.com"
                    ><i class="fas fa-envelope"></i> diveratech@gmail.com</a
                  >
                </li>
                <li>
                  <a
                    href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
                    ><i class="fab fa-whatsapp"></i> (+62) 813-3086-5531</a
                  >
                </li>
                <li>
                  <a href="https://www.instagram.com/diveratech/"
                    ><i class="fab fa-instagram"></i> Instagram</a
                  >
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/diveratech/"
                    ><i class="fab fa-linkedin"></i> LinkedIn</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="footer-widget">
              <h4>Temukan Kami</h4>
              <ul>
                <li>
                  <a href="#">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0813735149236!2d112.54547827499947!3d-7.231559192774584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7801bc912dd3d5%3A0xb3adb4ba8a9d9d5!2sDiveraTech!5e0!3m2!1sen!2sid!4v1746434422737!5m2!1sen!2sid"
                      width="350"
                      height="300"
                      style="border: 0"
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
          <p id="copyright"></p>
        </div>
      </div>
    </footer>

    <!-- EndSection   -->
  </main>
</template>
