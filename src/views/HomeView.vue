<script>
import $ from 'jquery'
import { Swiper } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default {
  created() {},
  name: 'YourComponent',
  data() {
    return {
      baseUrl: 'https://backoffice.diveratech.site/',
      faqList: [],
      kategoriAktif: 'All',
      kategoriList: [],
      portofolioList: [],
      filteredPortofolio: [],
      captionText: '',
      testimoniList: [],
      portfolioSwiper: null,
      processSwiper: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwiper()
    })
    const firstVisible = document.querySelector('.portfolioSwiper .swiper-slide img')
    this.captionText = firstVisible?.alt || 'Tanpa caption'

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

    axios
      .get('https://backoffice.diveratech.site/data-faq', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((res) => {
        // console.log('FAQ Response:', res.data)
        this.faqList = res.data
      })
      .catch((err) => {
        console.error('Error fetching FAQ:', err)
      })
    axios
      .get('https://backoffice.diveratech.site/data-kategori-portofolio')
      .then((res) => {
        const fetchedKategori = res.data.map((item) => ({
          label: item.value,
          value: item.value,
        }))
        this.kategoriList = [{ label: 'Semua', value: 'All' }, ...fetchedKategori]
      })
      .catch((err) => {
        console.error('Error fetching kategori portofolio:', err)
      })
    axios
      .get('https://backoffice.diveratech.site/data-portofolio')
      .then((res) => {
        this.portofolioList = res.data
        this.filteredPortofolio = res.data
        this.$nextTick(() => {
          this.updateCaption()
          this.initSwiper()
        })
      })
      .catch((err) => {
        console.error('Error fetching portofolio:', err)
      })
    axios
      .get('https://backoffice.diveratech.site/data-testimoni', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((res) => {
        this.testimoniList = res.data
        this.$nextTick(() => {
          new Swiper('.testimoniSwiper', {
            slidesPerView: 1, // Default untuk mobile
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            speed: 600,
            grabCursor: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },

            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            },
          })
        })
      })
      .catch((err) => {
        console.error('Error fetching testimoni:', err)
      })
  },

  methods: {
    filterPortfolio(category) {
      if (category === 'All') {
        this.filteredPortofolio = this.portofolioList
      } else {
        this.filteredPortofolio = this.portofolioList.filter((item) => item.kategori === category)
      }

      this.$nextTick(() => {
        const swiperInstance = document.querySelector('.portfolioSwiper')?.swiper
        if (swiperInstance) swiperInstance.slideTo(0)
        this.updateCaption()
      })
    },
    gantiKategori(kategori) {
      this.kategoriAktif = kategori
      this.$nextTick(() => {
        this.filterPortfolio(kategori)
      })
    },
    updateCaption() {
      const firstVisible = document.querySelector('.portfolioSwiper .swiper-slide img')
      this.captionText = firstVisible?.alt || 'Tidak ada data'
    },
    initSwiper() {
      if (this.portfolioSwiper) {
        this.portfolioSwiper.destroy(true, true)
      }
      if (this.processSwiper) {
        this.processSwiper.destroy(true, true)
      }
      this.portfolioSwiper = new Swiper('.portfolioSwiper', {
        slidesPerView: 1, // Default untuk mobile
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        speed: 600,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        },
      })
      this.processSwiper = new Swiper('.processSwiper', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 40,
        loop: true,
        grabCursor: true,
        speed: 600,
        breakpoints: {
          // Mobile
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Desktop
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
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
              <a href="" class="logo">
                <img
                  :src="'/assets/images/Logo/LogoDiveraTech_Lengkap_BGTransparent_TextBiru.png'"
                  style="height: 50px"
                  alt="DiveraTech"
                />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section"><a href="/" class="active">Beranda</a></li>
                <li class="scroll-to-section"><a href="/tentang-kami">Tentang Kami</a></li>
                <li class="scroll-to-section"><a href="#layanan">Layanan Kami</a></li>
                <li class="scroll-to-section"><a href="#portofolio">Portofolio</a></li>
                <li>
                  <div class="btn-navbar-btn">
                    <a
                      href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
                      ><i class="bi bi-whatsapp icon-bold"></i> Hubungi Kami</a
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
                      <h2 style="color: #036ece">
                        Transformasikan Bisnis Anda Bersama
                        <span class="text-bold">DiveraTech!</span>
                      </h2>
                      <p style="text-align: justify !important">
                        Maksimalkan potensi bisnis Anda melalui layanan pembuatan website dan
                        aplikasi mobile profesional.
                        <span class="text-bold text-blue">DiveraTech</span> siap membantu proses
                        transformasi digital secara cepat, efisien, dan sesuai kebutuhan UMKM hingga
                        perusahaan modern.
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
                  <img :src="'/assets/images/right-header.png'" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->

    <!-- Start Section Why Choose Us? -->
    <section
      id="why-us"
      class="why-us section"
      style="background-color: rgba(241, 244, 255, 0.977) !important"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4>Kenapa Harus Pilih <b class="text-blue"> DiveraTech?</b></h4>
              <p class="text-black">
                Kami bukan sekadar penyedia jasa pembuatan aplikasi dan website.
                <span class="text-bold text-blue">DiveraTech</span> adalah partner digital yang
                memahami tantangan bisnis Anda dan hadir dengan solusi nyata yang berdampak.
              </p>
            </div>
          </div>
        </div>

        <div class="row gy-4">
          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3" style="color: #036ece">
              <i class="bi bi-sliders icon-bold"></i>
            </div>
            <div>
              <h5 class="text-blue text-bold">Aplikasi Bisnis yang Disesuaikan Penuh</h5>
              <p class="text-black text-weight-400">
                Kami merancang website dan aplikasi custom yang benar-benar sesuai dengan kebutuhan,
                alur kerja, dan karakter bisnis Anda.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3" style="color: #036ece">
              <i class="bi bi-person-gear icon-bold"></i>
            </div>
            <div>
              <h5 class="text-blue text-bold">Tim Profesional dan Berpengalaman</h5>
              <p class="text-black text-weight-400">
                Dikerjakan oleh tim developer berpengalaman yang berkomitmen pada hasil berkualitas
                tinggi.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3" style="color: #036ece">
              <i class="bi bi-arrow-repeat icon-bold"></i>
            </div>
            <div>
              <h5 class="text-blue text-bold">Garansi Revisi Sesuai Kesepakatan</h5>
              <p class="text-black text-weight-400">
                Proyek Anda dilindungi dengan garansi revisi, memastikan hasil akhir sesuai harapan
                dan standar Anda.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3" style="color: #036ece">
              <i class="bi bi-tools icon-bold"></i>
            </div>
            <div>
              <h5 class="text-blue text-bold">Free Maintenance Awal Masa Pakai</h5>
              <p class="text-black text-weight-400">
                Setelah launching, Anda tetap kami dampingi dengan layanan perawatan gratis untuk
                memastikan stabilitas sistem.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3" style="color: #036ece">
              <i class="bi bi-person-check icon-bold"></i>
            </div>
            <div>
              <h5 class="text-blue text-bold">Kolaboratif dan Transparan</h5>
              <p class="text-black text-weight-400">
                Anda terlibat aktif sejak awal proses, karena kami percaya komunikasi terbuka
                menghasilkan solusi terbaik.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3" style="color: #036ece">
              <i class="bi bi-graph-up-arrow icon-bold"></i>
            </div>
            <div>
              <h5 class="text-blue text-bold">Fokus Hasil dan Berdampak</h5>
              <p class="text-black text-weight-400">
                Kami mengutamakan hasil yang terukur, bukan hanya selesai dikerjakan, tapi
                benar-benar membantu bisnis Anda berkembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
              <p class="text-black">
                Bisnis yang mengadopsi aplikasi dan website kustom terbukti lebih unggul dalam
                <b>efisiensi</b>, <b>loyalitas pelanggan</b>, dan <b>pengalaman pengguna</b>.
                Waktunya bertumbuh bersama <b class="text-blue">DiveraTech</b>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Aplikasi Bisnis Meningkatkan Loyalitas Pelanggan</h4>
              <p class="text-black">
                Bisnis yang memiliki aplikasi menunjukkan retensi pelanggan
                <strong>35% lebih tinggi</strong> dibanding bisnis yang hanya mengandalkan media
                sosial atau marketplace. <br /><em class="text-bold"
                  >— Adobe Digital Economy Index, 2022</em
                >
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Website Internal Meningkatkan Efisiensi Operasional</h4>
              <p class="text-black">
                Sebanyak <strong>68% pelaku UMKM</strong> memilih menggunakan aplikasi web internal
                untuk mempercepat proses kerja, otomatisasi operasional, dan menekan biaya harian.
                <br /><em class="text-bold">— Clutch Survey, 2023</em>
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Website Kustom = Tingkatkan Kepercayaan</h4>
              <p class="text-black">
                <strong>76% konsumen</strong> lebih percaya pada bisnis yang menghadirkan pengalaman
                digital yang konsisten lewat website dan aplikasi kustom di semua platform.
                <br /><em class="text-bold">— Forbes, 2024</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Layanan -->
    <div class="layanan section">
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

    <!-- Start Section Portfolio -->
    <section
      id="portofolio"
      style="padding-top: 40px; padding-bottom: 40px"
      class="portfolio section"
    >
      <div class="container">
        <div class="row mt-4 mb-4">
          <div class="col-lg-12 text-center">
            <div class="section-heading">
              <h4>Portofolio <b class="text-blue">DiveraTech</b></h4>
              <p class="text-black text-weight-400">
                Beberapa proyek unggulan yang telah kami selesaikan untuk berbagai kebutuhan
                digital. Klik panah untuk melihat selengkapnya.
              </p>
              <div class="portfolio-filters text-center mb-4 mt-3">
                <button
                  v-for="kategori in kategoriList"
                  :key="kategori.value"
                  :class="['filter-button', kategoriAktif === kategori.value ? 'active' : '']"
                  @click="gantiKategori(kategori.value)"
                >
                  {{ kategori.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="swiper portfolioSwiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="item in filteredPortofolio"
                :key="item.id"
                :data-category="item.kategori"
              >
                <img
                  :src="baseUrl + '/storage/' + item.gambar"
                  :alt="item.title"
                  class="rounded w-100"
                />
              </div>
            </div>
            <div class="swiper-caption text-center">
              <p id="swiper-caption-text" v-if="captionText">{{ captionText }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Endsection -->
    <!-- Start Section testimoni -->
    <!-- Start Section Testimoni -->
    <section
      id="testimoni"
      style="padding-top: 40px; padding-bottom: 40px"
      class="testimoni section"
    >
      <div class="container">
        <div class="row mt-4 mb-4">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4>Apa Kata Mereka?</h4>
              <p class="text-black text-weight-400">
                Beberapa testimoni dari klien kami yang puas. Klik panah untuk melihat lebih banyak.
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="swiper testimoniSwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in testimoniList" :key="item.id">
                <div class="testimoni-card">
                  <div class="testimoni-header">
                    <img
                      :src="
                        item.foto && item.foto.trim() !== ''
                          ? baseUrl + '/storage/' + item.foto
                          : '/assets/images/default_avatars.jpg'
                      "
                      alt="Foto Testimoni"
                      class="testimoni-avatar"
                    />
                    <div class="testimoni-info">
                      <div class="testimoni-name">{{ item.nama }}</div>
                      <div class="testimoni-project">{{ item.nama_project || '-' }}</div>
                    </div>
                  </div>
                  <div class="testimoni-text" v-html="item.testimoni"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section Testimoni -->

    <!-- Endsection -->
    <!-- Section Proses -->
    <section
      id="proses-section"
      style="background-color: #036ece; color: white; padding-top: 80px; padding-bottom: 80px"
    >
      <div class="container text-center">
        <div class="section-heading">
          <h4 class="mb-2 text-white">Ingin Menggunakan Jasa DiveraTech?</h4>
          <p class="mb-4 text-weight-400">
            Ikuti langkah-langkah berikut untuk memulai proyek Anda
          </p>
        </div>

        <!-- Slider Cards -->
        <div class="swiper processSwiper">
          <div class="swiper-wrapper">
            <!-- Card 1 -->
            <div class="swiper-slide">
              <div class="step-card">
                <div class="icon mb-2"><i class="bi bi-chat-dots icon-bold"></i></div>
                <h5 class="mb-4 text-bold">1. Konsultasi</h5>
                <p class="mb-4" style="font-weight: 400 !important; text-align: left !important">
                  Kami akan mendengarkan kebutuhan Anda dan memberikan solusi terbaik secara teknis
                  maupun strategis.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="swiper-slide">
              <div class="step-card">
                <div class="icon mb-2"><i class="bi bi-file-earmark icon-bold"></i></div>
                <h5 class="mb-4 text-bold">2. Perjanjian Jasa & Syarat Ketentuan</h5>
                <p class="mb-4" style="font-weight: 400 !important; text-align: left !important">
                  Detail layanan, harga, serta timeline akan disepakati bersama dalam dokumen resmi.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="swiper-slide">
              <div class="step-card">
                <div class="icon mb-2"><i class="bi bi-cash-coin icon-bold"></i></div>
                <h5 class="mb-4 text-bold">3. Pembayaran</h5>
                <p class="mb-4" style="font-weight: 400 !important; text-align: left !important">
                  Pembayaran dilakukan sesuai kesepakatan sebagai tanda persetujuan dan komitmen
                  pengerjaan.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="swiper-slide">
              <div class="step-card">
                <div class="icon mb-2"><i class="bi bi-code-slash icon-bold"></i></div>
                <h5 class="mb-4 text-bold">4. Proses Pengerjaan</h5>
                <p class="mb-4" style="font-weight: 400 !important; text-align: left !important">
                  Tim kami mulai mengerjakan sesuai timeline dan kebutuhan Anda.
                </p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="swiper-slide">
              <div class="step-card">
                <div class="icon mb-2"><i class="bi bi-check2-square icon-bold"></i></div>
                <h5 class="mb-4 text-bold">5. Testing & Finalisasi</h5>
                <p class="mb-4" style="font-weight: 400 !important; text-align: left !important">
                  Setelah selesai, kami lakukan uji coba dan serah terima produk final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- EndSection -->
    <!-- Start Section FAQ -->
    <section id="faq" class="section" style="padding-top: 80px; padding-bottom: 80px">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4 class="text-blue">FAQ (Frequently Asked Questions)</h4>
              <p class="text-black">
                <span class="text-bold-2 d-block mt-2 text-weight-400">
                  Berikut beberapa pertanyaan yang sering diajukan
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="col-lg-8">
            <div class="accordion" id="faqAccordion" v-if="faqList.length > 0">
              <div class="accordion-item" v-for="(faq, index) in faqList" :key="faq.id">
                <h2 class="accordion-header" :id="'faq' + index">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index"
                    aria-expanded="false"
                    :aria-controls="'collapse' + index"
                  >
                    {{ faq.pertanyaan }}
                  </button>
                </h2>
                <div
                  :id="'collapse' + index"
                  class="accordion-collapse collapse"
                  :aria-labelledby="'faq' + index"
                  data-bs-parent="#faqAccordion"
                >
                  <div
                    class="accordion-body text-black"
                    style="color: black !important; font-weight: 500 !important"
                    v-html="faq.jawaban"
                  ></div>
                </div>
              </div>
            </div>
            <div class="text-faq">
              <span
                style="
                  color: black !important;
                  text-align: center !important;
                  font-size: 15px;
                  font-weight: 400 !important;
                "
                >*Ada pertanyaan lain? Hubungi kami
                <a
                  href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
                  ><strong>Disini</strong></a
                >.</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- EndSection -->

    <!-- Start Section Kalimat Iklan -->
    <div id="cta-section" class="cta-section" style="background-color: #036ece">
      <div class="container">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-12">
            <h3 class="cta-heading">Jangan Lewatkan Peluang Ini!</h3>
            <p class="cta-text">
              Wujudkan ide dan solusi digital Anda bersama <b>DiveraTech</b>. Dari website
              profesional hingga aplikasi canggih, kami bantu Anda hadir lebih kuat di dunia
              digital.
            </p>
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
    <section id="contact" class="contact section" style="padding-top: 80px; padding-bottom: 80px">
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
