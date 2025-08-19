<template>
  <main>
    <!-- ...Header & Banner existing... -->
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
                <li class="scroll-to-section"><a href="/">Beranda</a></li>
                <li class="scroll-to-section"><a href="/tentang-kami">Tentang Kami</a></li>
                <li class="scroll-to-section"><a href="/#layanan">Layanan Kami</a></li>
                <li class="scroll-to-section"><a href="/#portofolio">Portofolio</a></li>
                <li>
                  <div class="btn-navbar-btn">
                    <a href="/produk">Produk Kami</a>
                    <span class="badge-hot"><i class="bi bi-fire"></i> Hot!</span>
                  </div>
                </li>
              </ul>
              <a class="menu-trigger"> <span>Menu</span> </a>
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
                      <h2 style="color: #036ece; margin-bottom: 10px !important">
                        Pilihan Template Landing Page
                      </h2>

                      <p
                        class="motto"
                        style="font-size: 1.2rem; font-weight: 500; margin-bottom: 30px !important"
                      >
                        Tingkatkan kredibilitas bisnis Anda dengan
                        <strong>Landing Page Premium</strong> dari <strong>DiveraTech!</strong>
                      </p>

                      <p
                        style="
                          font-size: 1.2rem;
                          font-weight: 500;
                          margin-top: 15px;
                          line-height: 1.4;
                          margin-bottom: 16px;
                        "
                      >
                        Mulai dari
                        <span
                          style="text-decoration: line-through; color: #ff0004; margin-left: 8px"
                          >Rp. 1.199.000</span
                        >
                        <br />
                        <span class="produk-text-header">Rp. 399.000</span>
                        <span style="font-size: 1.2rem; font-weight: 600; color: #036ece">
                          (Satu kali bayar)<span style="color: #ff0004">*</span></span
                        >
                      </p>

                      <p
                        style="
                          font-size: 0.75rem;
                          color: #ff0004;
                          margin-top: 5px;
                          line-height: 1.3;
                        "
                      >
                        <span style="color: #ff0004">*</span>Harga sudah termasuk domain & hosting
                        <strong>selama 1 tahun</strong>. <br />
                        <span style="color: #ff0004">*</span>Gratis konsultasi desain sebelum
                        pembelian.
                      </p>
                    </div>

                    <div class="col-lg-12 btn-header">
                      <a href="#landing-templates" class="btn btn-header-btn">
                        <i class="bi bi-cart-check"></i> Pilih Template Sekarang
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
                  <img :src="'/assets/images/LP-Banner.png'" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->
    <!-- Section: Landing Page Templates -->
    <section
      id="landing-templates"
      class="produk-section py-5"
      style="background-color: rgba(241, 244, 255, 0.977) !important"
    >
      <div class="produk-landing">
        <div class="container mt-5 mb-5">
          <!-- Heading -->
          <div class="row mb-4">
            <div class="col-lg-12 text-center">
              <div class="section-heading">
                <h4 style="color: #036ece">Pilih Desain Landing Page Anda</h4>
              </div>
            </div>
          </div>

          <!-- Grid 3x3 -->
          <div class="row g-4">
            <div class="kategori-filters text-center">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="['filter-button', { active: selectedCategory === category }]"
                class="me-2"
              >
                {{ category }}
              </button>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-12"
              v-for="template in paginatedTemplates"
              :key="template.id"
            >
              <div class="card h-100 shadow-sm produk-card">
                <div class="card-img-wrapper">
                  <img :src="template.image" class="card-img-top" :alt="template.title" />
                  <div class="overlay">
                    <h5 class="card-title mb-3">{{ template.title }}</h5>
                    <div class="overlay-buttons">
                      <a :href="template.previewUrl" target="_blank" class="btn btn-blue mr-3"
                        >Lihat</a
                      >
                      <button
                        class="btn btn-secondary"
                        style="margin-left: 10px !important"
                        data-bs-toggle="modal"
                        data-bs-target="#purchaseModal"
                      >
                        Pilih Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="row mt-4">
            <div class="col text-center">
              <nav>
                <ul class="pagination justify-content-center">
                  <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="prevPage">Prev</button>
                  </li>

                  <li
                    v-for="page in totalPages"
                    :key="page"
                    class="page-item"
                    :class="{ active: currentPage === page }"
                  >
                    <button class="page-link" @click="goToPage(page)">{{ page }}</button>
                  </li>

                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="nextPage">Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div
      class="modal fade"
      id="purchaseModal"
      tabindex="-1"
      aria-labelledby="purchaseModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content p-5">
          <div class="modal-header">
            <h5 class="modal-title text-black text-bold" id="purchaseModalLabel">
              Pilih Paket & Lengkapi Data
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <!-- Template -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Template yang Dipilih</h6>
              <p class="text-black">
                <strong>Nama Template:</strong> <span id="selectedTemplate">Landing Page A</span>
              </p>
            </div>

            <!-- Paket -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Pilih Paket<span style="color: #ff0004">*</span></h6>
              <div class="paket-modal mt-2">
                <div class="row g-3">
                  <div class="col-lg-4">
                    <div class="card paket-card h-100">
                      <div class="card-header text-white bg-blue fw-bold text-center">
                        Paket Lite
                      </div>
                      <div class="card-body text-center">
                        <p class="card-old-price text-danger text-decoration-line-through">
                          Rp. 1.199.000
                        </p>
                        <h6 class="text-blue text-bold fs-4">Rp. 399.000</h6>
                        <p><strong>Domain (.site, .my.id, .xyz)</strong></p>

                        <button
                          class="btn btn-outline-blue w-100 pilih-paket"
                          data-paket="Lite"
                          data-harga="399000"
                        >
                          Pilih Paket
                        </button>
                        <input type="hidden" id="paketInput" name="paket" />
                        <input type="hidden" id="hargaInput" name="harga" />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card paket-card h-100">
                      <div class="card-header text-white bg-blue fw-bold text-center">
                        Paket Regular
                      </div>
                      <div class="card-body text-center">
                        <p class="card-old-price text-danger text-decoration-line-through">
                          Rp. 1.399.000
                        </p>
                        <h6 class="text-blue text-bold fs-4">Rp. 599.000</h6>
                        <p><strong>Domain (.com)</strong></p>

                        <button
                          class="btn btn-outline-blue w-100 pilih-paket"
                          data-paket="Regular"
                          data-harga="599000"
                        >
                          Pilih Paket
                        </button>
                        <input type="hidden" id="paketInput" name="paket" />
                        <input type="hidden" id="hargaInput" name="harga" />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card paket-card h-100">
                      <div class="card-header text-white bg-blue fw-bold text-center">
                        Paket Pro
                      </div>
                      <div class="card-body text-center">
                        <p class="card-old-price text-danger text-decoration-line-through">
                          Rp. 1.599.000
                        </p>
                        <h6 class="text-blue text-bold fs-4">Rp. 799.000</h6>
                        <p><strong>Domain (.id, .co.id, .net)</strong></p>

                        <button
                          class="btn btn-outline-blue w-100 pilih-paket"
                          data-paket="Pro"
                          data-harga="799000"
                        >
                          Pilih Paket
                        </button>
                        <input type="hidden" id="paketInput" name="paket" />
                        <input type="hidden" id="hargaInput" name="harga" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Nama Domain -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Nama Domain<span style="color: #ff0004">*</span></h6>
              <input type="text" class="form-control mt-2" placeholder="Contoh: tokoku.com" />
              <div class="form-text text-muted">
                <span style="color: #ff0004">*</span>Pastikan sesuai dengan ekstensi paket yang
                dipilih (.com, .id, dll).
              </div>
            </div>

            <!-- Form Data Diri -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">Data Diri</h6>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Nama Lengkap<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Masukkan Nama Lengkap Anda"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Email<span style="color: #ff0004">*</span></label
                    >
                    <input type="email" class="form-control" placeholder="Masukkan Email Anda" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >No. WhatsApp<span style="color: #ff0004">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Masukkan Nomor WA Anda" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Alamat<span style="color: #ff0004">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Alamat Lengkap Anda" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Nama Bisnis<span style="color: #ff0004">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Masukkan Nama Bisnis Anda"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-black"
                      >Alamat Bisnis<span style="color: #ff0004">*</span></label
                    >
                    <input type="text" class="form-control" placeholder="Alamat Bisnis Anda" />
                  </div>
                </div>
              </form>
            </div>

            <!-- Paket Berlangganan -->
            <div class="mb-4">
              <h6 class="text-blue text-bold">
                Paket Berlangganan<span style="color: #ff0004">*</span>
              </h6>
              <select class="form-select mt-2">
                <option selected>Pilih Paket</option>
                <option value="1">1 Tahun</option>
                <option value="2">2 Tahun</option>
                <option value="3">3 Tahun</option>
              </select>
            </div>

            <!-- Total Harga -->
            <div class="mb-4 text-end">
              <h6 class="text-blue text-bold">Rincian Harga</h6>
              <p class="mb-1 text-black">
                <strong>Subtotal Paket:</strong> <span id="subtotalHarga">Rp. 0</span>
              </p>
              <p class="mb-1 text-black">
                <strong>Biaya Tambahan:</strong> <span id="biayaTambahan">Rp. 0</span>
              </p>
              <h5 class="fw-bold text-success">
                Total: <span id="totalHarga" class="text-bold">Rp. 0</span>
              </h5>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-blue">Lanjutkan Pembelian</button>
          </div>
        </div>
      </div>
    </div>

    <section class="produk-section py-5">
      <div class="container mt-5 mb-5">
        <div class="row mb-4">
          <div class="col-lg-12 text-center section-heading mb-3">
            <h4 style="color: #036ece">Harga Terjangkau, Cocok untuk Semua!</h4>
            <p class="text-black">
              Sekarang Anda dapat membuat website profesional untuk bisnis Anda dengan harga yang
              terjangkau.
            </p>
          </div>
        </div>
        <div class="paket-landingpage">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card shadow paket-main-card text-center">
                <div class="card-body">
                  <h5 class="card-title">Paket Lite</h5>
                  <div class="card shadow-sm paket-inner-card mt-3">
                    <div class="card-body">
                      <p
                        class="card-old-price"
                        style="
                          text-decoration: line-through;
                          color: #ff0004;
                          font-size: 16px;
                          margin-bottom: 5px;
                        "
                      >
                        Rp. 1.199.000
                      </p>
                      <p class="card-price">
                        <span class="currency">Rp.</span>
                        <span class="amount">399</span>
                        <span class="suffix">.000</span>
                      </p>
                      <p class="card-text text-bold">Domain (.site), (.my.id), (.xyz)</p>
                      <ul class="paket-features">
                        <li>Include Hosting</li>
                        <li>Free SSL Security</li>
                        <li>Free Biaya Setup</li>
                        <li>SEO Basic</li>
                        <li>Akses Admin Page</li>
                        <li>Pengerjaan <b>2 Hari</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card shadow paket-main-card text-center">
                <div class="card-body">
                  <h5 class="card-title">Paket Regular</h5>
                  <div class="card shadow-sm paket-inner-card mt-3">
                    <div class="card-body">
                      <p
                        class="card-old-price"
                        style="
                          text-decoration: line-through;
                          color: #ff0004;
                          font-size: 16px;
                          margin-bottom: 5px;
                        "
                      >
                        Rp. 1.399.000
                      </p>
                      <p class="card-price">
                        <span class="currency">Rp.</span>
                        <span class="amount">599</span>
                        <span class="suffix">.000</span>
                      </p>
                      <p class="card-text text-bold">Domain (.com)</p>
                      <ul class="paket-features">
                        <li>Include Hosting</li>
                        <li>Free SSL Security</li>
                        <li>Free Biaya Setup</li>
                        <li>SEO Basic</li>
                        <li>Akses Admin Page</li>
                        <li>Pengerjaan <b>2 Hari</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card shadow paket-main-card text-center">
                <div class="card-body">
                  <h5 class="card-title">Paket Pro</h5>
                  <div class="card shadow-sm paket-inner-card mt-3">
                    <div class="card-body">
                      <p
                        class="card-old-price"
                        style="
                          text-decoration: line-through;
                          color: #ff0004;
                          font-size: 16px;
                          margin-bottom: 5px;
                        "
                      >
                        Rp. 1.599.000
                      </p>
                      <p class="card-price">
                        <span class="currency">Rp.</span>
                        <span class="amount">799</span>
                        <span class="suffix">.000</span>
                      </p>
                      <p class="card-text text-bold">Domain (.id), (.co.id), (.net)</p>
                      <ul class="paket-features">
                        <li>Include Hosting</li>
                        <li>Free SSL Security</li>
                        <li>Free Biaya Setup</li>
                        <li>SEO Basic</li>
                        <li>Akses Admin Page</li>
                        <li>Pengerjaan <b>2 Hari</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <a
      href="https://wa.me/6281330865531?text=Halo%20DiveraTech%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek%20aplikasi.%20Boleh%20dibantu%3F"
      target="_blank"
      class="whatsapp-float"
    >
      <i class="fab fa-whatsapp"></i> <span class="whatsapp-text">Hubungi Kami!</span>
    </a>
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
        <div class="copyright-text"><p id="copyright"></p></div>
      </div>
    </footer>

    <!-- ...WhatsApp Float & Footer existing... -->
  </main>
</template>

<script>
export default {
  name: 'LandingTemplates',
  data() {
    return {
      categories: ['All', 'Makanan', 'Fashion', 'Otomotif'],
      selectedCategory: 'All',
      currentPage: 1,
      perPage: 9,
      templates: [
        {
          id: 1,
          title: 'Template Makanan',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: 'https://template1.diveratech.site',
        },
        {
          id: 2,
          title: 'Template Fashion',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: 'https://template2.diveratech.site',
        },
        {
          id: 3,
          title: 'Template Otomotif',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: 'https://template3.diveratech.site',
        },
        { id: 4, title: 'Template UMKM', image: '/assets/images/Portfolio/1.png', previewUrl: '#' },
        {
          id: 5,
          title: 'Template Startup',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 6,
          title: 'Template Toko Online',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 7,
          title: 'Template Klinik',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 8,
          title: 'Template Sekolah',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 9,
          title: 'Template Event',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 10,
          title: 'Template Freelancer',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 11,
          title: 'Template Wedding',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
        {
          id: 12,
          title: 'Template Travel',
          image: '/assets/images/Portfolio/1.png',
          previewUrl: '#',
        },
      ],
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.templates.length / this.perPage)
    },
    paginatedTemplates() {
      const start = (this.currentPage - 1) * this.perPage
      return this.templates.slice(start, start + this.perPage)
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    openModal() {
      this.showModal = true
      document.body.classList.add('no-scroll')
    },
    closeModal() {
      this.showModal = false
      document.body.classList.remove('no-scroll')
    },
  },
  mounted() {
    const startYear = 2025
    const currentYear = new Date().getFullYear()
    const yearText = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`
    document.getElementById('copyright').innerHTML =
      `Copyright © ${yearText} <b>DiveraTech</b>. All Rights Reserved. <br />`

    // 🔥 fungsi untuk hitung total
    const updateTotal = () => {
      const paket = document.getElementById('paketInput').value
      const harga = parseInt(document.getElementById('hargaInput').value || 0)
      const tahun = parseInt(document.querySelector('.form-select').value || 1)

      let tambahan = 0
      if (paket === 'Lite') {
        if (tahun === 2) tambahan = 200000
        if (tahun === 3) tambahan = 400000
      } else if (paket === 'Regular') {
        if (tahun === 2) tambahan = 300000
        if (tahun === 3) tambahan = 600000
      } else if (paket === 'Pro') {
        if (tahun === 2) tambahan = 500000
        if (tahun === 3) tambahan = 1000000
      }

      const total = harga + tambahan

      document.getElementById('subtotalHarga').innerText = `Rp. ${harga.toLocaleString('id-ID')}`
      document.getElementById('biayaTambahan').innerText = `Rp. ${tambahan.toLocaleString('id-ID')}`
      document.getElementById('totalHarga').innerText = `Rp. ${total.toLocaleString('id-ID')}`
    }

    // Event pilih paket
    document.querySelectorAll('.pilih-paket').forEach((btn) => {
      btn.addEventListener('click', function () {
        const paket = this.getAttribute('data-paket')
        const harga = this.getAttribute('data-harga')

        document.getElementById('paketInput').value = paket
        document.getElementById('hargaInput').value = harga

        // reset tampilan semua card + button
        document
          .querySelectorAll('.paket-card')
          .forEach((card) => card.classList.remove('selected'))
        document.querySelectorAll('.pilih-paket').forEach((button) => {
          button.innerText = 'Pilih Paket'
          button.classList.remove('btn-success')
          button.classList.add('btn-outline-blue')
        })

        // tandai yang dipilih
        this.closest('.paket-card').classList.add('selected')
        this.innerText = 'Dipilih'
        this.classList.remove('btn-outline-blue')
        this.classList.add('btn-success')

        updateTotal()
      })
    })

    // Event ganti tahun (form-select)
    document.querySelector('.form-select').addEventListener('change', updateTotal)
  },
}
</script>
