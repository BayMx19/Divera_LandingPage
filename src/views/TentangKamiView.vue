<script>
import $ from 'jquery'
export default {
  created() {},
  name: 'YourComponent',
  mounted() {
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
  methods: {},
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
              <a href="" class="logo">
                <img
                  :src="'/assets/images/Logo/LogoDiveraTech_Lengkap_BGTransparent_TextBiru.png'"
                  style="height: 50px; margin-top: 25px !important"
                  alt="DiveraTech"
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
                    <a
                      href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
                      ><i class="fa fa-whatsapp"></i> Hubungi Kami</a
                    >
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
                        “Build Smarter. Launch Faster. With <strong>DiveraTech</strong>!”
                      </p>
                    </div>
                    <div class="col-lg-12 btn-header">
                      <a href="#cta-section" class="btn btn-header-btn">
                        Mulai Konsultasi Gratis!
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
                  <img :src="'/assets/images/tentang-kami.png'" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->

    <!-- Start Section What-Is? -->
    <section
      id="what-is"
      class="why-us section"
      style="padding-top: 80px !important; background-color: rgba(241, 244, 255, 0.977) !important"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading" style="margin-bottom: 0px !important">
              <h4>Apa itu <b class="text-blue"> DiveraTech?</b></h4>
              <p class="text-black text-weight-400">
                <strong class="text-blue">DiveraTech</strong> adalah mitra teknologi andal yang
                membantu Anda merancang, membangun, dan mengelola solusi digital secara menyeluruh.
                Kami berfokus pada pengembangan website profesional, aplikasi mobile, hingga solusi
                perangkat lunak siap pakai yang dirancang untuk mempercepat pertumbuhan bisnis Anda.
                <br />
                Dengan tim yang ahli di bidang UI/UX Design, Artificial Intelligence & Machine
                Learning, serta integrasi sistem, kami memastikan setiap solusi yang kami tawarkan
                tidak hanya fungsional tetapi juga efisien, mudah digunakan, dan relevan dengan
                kebutuhan pasar saat ini. Kami juga menyediakan layanan Support & Maintenance untuk
                menjaga performa sistem Anda tetap optimal, serta IT & Management Consulting untuk
                membantu Anda mengambil keputusan strategis berbasis teknologi.
                <br />
                <strong class="text-blue">DiveraTech</strong> telah dipercaya oleh berbagai klien
                dari beragam sektor industri untuk menghadirkan solusi digital yang berdampak nyata
                dan tepat sasaran. Bersama kami, bangun fondasi teknologi yang lebih cerdas, cepat,
                dan scalable.
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
          <div class="section-heading">
            <h4 class="text-bold mb-2">Komitmen Kami</h4>
          </div>
          <p class="text-weight-400 mb-1" style="text-align: justify !important">
            Di <b class="text-blue">DiveraTech</b>, kami tidak hanya menciptakan aplikasi website
            dan aplikasi mobile, tapi juga merancang berbagai solusi digital berbasis teknologi
            cerdas — mulai dari dashboard analitik, sistem informasi berbasis web, hingga solusi
            AI/ML dan integrasi sistem yang disesuaikan dengan kebutuhan spesifik tiap bisnis.
          </p>
          <p class="text-weight-400 mb-1" style="text-align: justify !important">
            Kami percaya bahwa teknologi yang baik adalah teknologi yang memudahkan, bukan
            membingungkan. Karena itu, kami berkomitmen untuk:
          </p>
          <ul>
            <li><b>Menyederhanakan proses digitalisasi</b></li>
            <li><b>Mengoptimalkan fungsi dan performa dari setiap solusi</b></li>
            <li><b>Menciptakan solusi yang berdampak nyata bagi bisnis anda</b></li>
          </ul>
          <p class="text-weight-400 mb-1" style="text-align: justify !important">
            Dengan kombinasi antara desain yang user-friendly, teknologi terkini, dan dukungan yang
            berkelanjutan, <b class="text-blue">DiveraTech</b> hadir untuk memastikan setiap langkah
            transformasi digital Anda berjalan lebih cepat, tepat, dan berkelanjutan.
          </p>
        </div>
        <div class="komitmen-image">
          <img :src="'/assets/images/office.png'" alt="Tim DiveraTech bekerja bersama" />
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section VMV -->
    <section class="vmv-section">
      <div class="section-heading">
        <h4 class="text-blue mb-5">Visi, Misi, dan Nilai - Nilai Kami</h4>
      </div>
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
    <!-- Start Section Layanan -->
    <div class="layanan section" style="background-color: #fff !important">
      <div class="container">
        <div id="layanan" class="row">
          <!-- Kiri: Deskripsi dan Layanan -->
          <div class="col-lg-7 align-self-center">
            <div class="section-heading">
              <h4>Layanan <b class="text-blue">DiveraTech</b></h4>
              <img :src="'/assets/images/heading-line-dec.png'" alt="" />
              <p class="text-black text-weight-400">
                <span class="text-bold text-blue">DiveraTech</span> siap membantu transformasi
                digital bisnismu. Mulai dari pembuatan website, aplikasi mobile, hingga solusi
                software dan konsultasi IT dalam satu tempat.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">Website Development</h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">Mobile App Development</h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">
                    Ready-to-Use Software Solutions
                  </h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0 text-break">AI/ML Solutions</h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">UI/UX Design</h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">Support & Maintenance</h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">IT & Management Consulting</h4>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item d-flex align-items-center">
                  <i class="fas fa-check-circle me-2" style="color: #036ece"></i>
                  <h4 class="text-layanan text-bold text-small mb-0">
                    System Integration Services
                  </h4>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="col-lg-12 btn-header">
                  <a href="#cta-section" class="btn btn-header-btn">
                    Jadwalkan Konsultasi Gratis!
                  </a>
                </div>
                <span class="text-black">*Konsultasi gratis untuk semua calon klien</span>
              </div>
            </div>
          </div>

          <!-- Kanan: Gambar -->
          <div class="col-lg-5">
            <div class="right-image">
              <img :src="'/assets/images/about-right-dec.png'" alt="Ilustrasi layanan DiveraTech" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Kalimat Iklan -->
    <div id="cta-section" class="cta-section" style="background-color: #036ece">
      <div class="container">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-12">
            <h3 class="cta-heading mb-4">
              Siap bertransformasi secara digital bersama DiveraTech?
            </h3>
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
                  kami langsung atau isi form di bawah ini. Tim
                  <b class="text-blue">DiveraTech</b> siap mendengarkan dan memberikan solusi
                  terbaik untuk bisnismu.
                </span>
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
                <img
                  :src="'/assets/images/Logo/LogoDiveraTech_Lengkap_BGTransparent_TextPutih.png'"
                  alt=""
                  style="height: 60px; width: 150px"
                />
              </div>
              <p class="text-weight-400">
                Build Smarter. Launch Faster. With <b class="text-bold">DiveraTech!</b>
              </p>
              <p class="text-weight-400" style="text-align: justify !important">
                <strong>DiveraTech</strong> adalah partner solusi digital yang siap membantu bisnis
                Anda melalui Layanan IT lengkap dengan cepat, efisien, dan profesional dengan harga
                terjangkau
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
                <li><a href="#faq">FAQ</a></li>
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
                <li>
                  <a href="https://www.facebook.com/people/DiveraTech/61576207515343/#"
                    ><i class="fab fa-facebook"></i> Facebook</a
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
                      :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0813735149236!2d112.54547827499947!3d-7.231559192774584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7801bc912dd3d5%3A0xb3adb4ba8a9d9d5!2sDiveraTech!5e0!3m2!1sen!2sid!4v1746434422737!5m2!1sen!2sid'"
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
