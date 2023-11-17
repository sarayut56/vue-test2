<template>
  <div class="container" style="min-height: 300px">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />
    <div class="hello">
      <!-- <img alt="Vue logo" src="../assets/00.png"> -->
      <div class="mb-3">
        <!-- ************************************* -->
        <label for="input-datalist">รหัสคอมพิวเตอร์</label>
        <input
          :disabled="!com_id ? 'disabled' : false"
          v-model="comData.com_no"
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder=""
        />
      </div>
      <div class="mb-3">
        <label for="input-datalist">ชื่อคอมพิวเตอร์</label>
        <input
          v-model="comData.com_name"
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder=""
        />
      </div>
      <!-- ******************************************************* -->
      <label for="input-datalist">หมายเลขซีเรียล</label>
      <input
        v-model="comData.com_serial_no"
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder=""
      />
      <!-- **************************************************** -->
      <label for="input-datalist">เลขครุภัณฑ์</label>
      <input
        v-model="comData.com_number"
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder=""
      />
      <!-- ********************************************* -->
      <label for="input-datalist">แรม</label>

      <div class="row">
        <div class="col-9">
          <v-select v-model="ramsSellected" :options="rams"></v-select>
        </div>
        <div class="col-3">
          <button
            @click="addTextClicked('เพิ่มเเรม', 'rams')"
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <i class="bi bi-download" style="font-size: 18px"></i>
          </button>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex=""
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <AddWorld :msg="addText" :type="addType" />
        </div>
      </div>
      <!-- **************************************************** -->

      <label for="input-datalist">ฮาร์ดดิส</label>

      <div class="row">
        <div class="col-9">
          <v-select v-model="hhdsSellected" :options="hhds"></v-select>
        </div>
        <div class="col-3">
          <button
            type="button"
            @click="addTextClicked('เพิ่มฮาร์ดดิส', 'hhds')"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <i class="bi bi-download" style="font-size: 18px"></i>
          </button>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex=""
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
      </div>
      <!-- ***************************************** -->
      <label for="input-datalist">ชื่อซีพียู</label>

      <div class="row">
        <div class="col-9">
          <v-select v-model="cpusSellected" :options="cpus"></v-select>
        </div>
        <div class="col-3">
          <button
            type="button"
            @click="addTextClicked('เพิ่มซีพียู', 'cpus')"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <i class="bi bi-download" style="font-size: 18px"></i>
          </button>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex=""
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
      </div>
      <!-- **************************************** -->
      <label for="input-datalist">วินโดวส์</label>

      <div class="row">
        <div class="col-9">
          <v-select v-model="winsSellected" :options="wins"></v-select>
        </div>
        <div class="col-3">
          <button
            type="button"
            @click="addTextClicked('เพิ่มวินโดวส์', 'wins')"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <i class="bi bi-download" style="font-size: 18px"></i>
          </button>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex=""
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
      </div>
      <!-- ******************************************* -->

      <label for="input-datalist">ยี่ห้อ</label>

      <div class="row">
        <div class="col-9">
          <v-select v-model="barandsSellected" :options="barands"></v-select>
        </div>
        <div class="col-3">
          <button
            type="button"
            @click="addTextClicked('เพิ่มยี่ห้อ', 'barands')"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <i class="bi bi-download" style="font-size: 18px"></i>
          </button>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal6"
          tabindex=""
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
      </div>

      <!-- ******************************************* -->
      <label for="input-datalist">หน่วยงาน</label>

      <div class="row">
        <div class="col-12">
          <v-select v-model="deptsSellected" :options="depts"></v-select>
        </div>
      </div>

      <!-- ***************************************** -->
      <div class="form-group">
        <label for="input-datalist">ที่ตั้ง</label>
        <input
          v-model="comData.com_depart_addr"
          type="text"
          class="form-control"
          placeholder=""
          list="list-timezone"
          id="input-datalist"
        />
        <datalist id="list-timezone"> </datalist>
      </div>
      <div class="form-group">
        <label for="input-datalist">ไอพี</label>
        <input
          v-model="comData.com_ip"
          type="text"
          class="form-control"
          placeholder=""
          list="list-timezone"
          id="input-datalist"
        />
      </div>
      <datalist id="list-timezone"> </datalist>
    </div>
    <label for="input-datalist"></label>
    <!-- data-bs-toggle="modal"
          data-bs-target="#exampleModal4" -->
    <div class="d-grid gap-2 col-6 mx-auto">
      <button
        @click="createOrUpdateClicked(com_id ? 'update' : 'create')"
        type="submit"
        class="btn btn-outline-success"
      >
        บันทึกข้อมูล
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex=""
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">แจ้งเตือน</h2>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <div class="d-grid gap-2 col-4 mx-auto">
                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                <a class="btn btn-outline-danger" href="/go" role="button"
                  >ปิด</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-outline-danger"
        onclick="history.back()"
      >
        ย้อนกลับ
      </button>
    </div>
  </div>
</template>

<script>
import AddWorld from "./AddWorld.vue";
export default {
  name: "ComView",
  components: {
    AddWorld,
  },
  data() {
    return {
      com_id: this.$route.params.com_id ? this.$route.params.com_id : null,
      comData: [],
      rams: [],
      ramsSellected: null,
      hhds: [],
      hhdsSellected: null,
      cpus: [],
      cpusSellected: null,
      wins: [],
      winsSellected: null,
      depts: [],
      deptsSellected: null,
      barands: [],
      barandsSellected: null,
      ips: [],
      ipsSellected: null,
      addText: "",
      addType: "",

      // serials: [],
      // serialSellected: null,
      // numbers: [],
      // numbersSellected: null,
    };
  },
  mounted() {
    // console.log(this.$route.params.com_id);
    this.loadPage();
  },
  methods: {
    loadPage() {
      const promise1 = new Promise((resolve, reject) => {
        this.getRam((err) => {
          if (err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });
      const promise2 = new Promise((resolve, reject) => {
        this.getHhds((err) => {
          if (err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });
      const promise3 = new Promise((resolve, reject) => {
        this.getCpus((err) => {
          if (err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });
      const promise4 = new Promise((resolve, reject) => {
        this.getWins((err) => {
          if (err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });
      const promise5 = new Promise((resolve, reject) => {
        this.getDepts((err) => {
          if (err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });
      const promise6 = new Promise((resolve, reject) => {
        this.getBarands((err) => {
          if (err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });

      // start
      // this.$Progress.start();
      // finish
      // this.$Progress.finish();
      // error
      // this.$Progress.fail();
      this.$Progress.start();
      Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
        .then((final) => {
          if (final) {
            if (this.com_id) {
              this.getComById();
            }
            this.$Progress.finish();
          } else {
            console.log("Error, Somthing when wrong.");
          }
        })
        .catch((err) => {
          console.log("err>>", err);
        });
    },
    getComById() {
      console.log("final");

      this.$axios
        .get("/crProductSurvey/" + this.com_id, {
          headers: {
            Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
          },
        })
        .then((e) => {
          //console.log(e.data);
          // this.$session.set("XXX", value);

          this.comData = e.data.result;

          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_ram") {
              this.rams.map((e) => {
                if (e.id == this.comData.com_ram) {
                  this.ramsSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });

          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_harddisk") {
              this.hhds.map((e) => {
                if (e.id == this.comData.com_harddisk) {
                  this.hhdsSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });

          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_cpu") {
              this.cpus.map((e) => {
                if (e.id == this.comData.com_cpu) {
                  this.cpusSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });
          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_stystem") {
              this.wins.map((e) => {
                if (e.id == this.comData.com_stystem) {
                  this.winsSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });
          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_depart") {
              this.depts.map((e) => {
                if (e.id == this.comData.com_depart) {
                  this.deptsSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });
          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_ip") {
              this.ips.map((e) => {
                if (e.id == this.comData.com_ip) {
                  this.ipsSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });
          Object.keys(this.comData).map((comKey) => {
            if (comKey == "com_barand") {
              this.barands.map((e) => {
                if (e.id == this.comData.com_barand) {
                  this.barandsSellected = {
                    id: e.id,
                    label: e.label,
                  };
                }
              });
            }
          });
        })
        .catch((err) => {
          //  userไม่ถูก
          // console.log(err);
          // console.log("Can't get this api,", err);
          if (err.code == "ERR_BAD_REQUEST") {
            this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
          }
        });
    },
    getRam(cb) {
      try {
        this.$axios
          .get("/crRam/active", {
            headers: {
              Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
            },
          })
          .then((e) => {
            // console.log(e.data);
            // this.$session.set("XXX", value);
            e.data.result.map((r, k) => {
              this.rams.push({
                id: r.rams_id,
                label: r.rams_name,
              });
              if (e.data.result.length == k + 1) {
                cb(true);
              }
            });
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      } catch (error) {
        cb(false);
      }
    },
    getHhds(cb) {
      try {
        this.$axios
          .get("/crHardDisk/active", {
            headers: {
              Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
            },
          })
          .then((e) => {
            // console.log(e.data);
            // this.$session.set("XXX", value);
            e.data.result.map((h, k) => {
              this.hhds.push({
                id: h.harddisk_id,
                label: h.harddisk_name,
              });
              if (e.data.result.length == k + 1) {
                cb(true);
              }
            });
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      } catch (error) {
        cb(false);
      }
    },
    getCpus(cb) {
      try {
        this.$axios
          .get("/crCpu/active", {
            headers: {
              Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
            },
          })
          .then((e) => {
            // console.log(e.data);
            // this.$session.set("XXX", value);
            e.data.result.map((c, k) => {
              this.cpus.push({
                id: c.cpu_id,
                label: c.cpu_name,
              });
              if (e.data.result.length == k + 1) {
                cb(true);
              }
            });
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      } catch (error) {
        cb(false);
      }
    },
    getWins(cb) {
      try {
        this.$axios
          .get("/crSytem/active", {
            headers: {
              Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
            },
          })
          .then((e) => {
            // console.log(e.data);
            // this.$session.set("XXX", value);
            e.data.result.map((w, k) => {
              this.wins.push({
                id: w.system_id,
                label: w.system_name,
              });
              if (e.data.result.length == k + 1) {
                cb(true);
              }
            });
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      } catch (error) {
        cb(false);
      }
    },
    getDepts(cb) {
      try {
        this.$axios
          .get("/crDepart", {
            headers: {
              Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
            },
          })
          .then((e) => {
            // console.log(e.data);
            // this.$session.set("XXX", value);
            e.data.result.map((d, k) => {
              this.depts.push({
                id: d.dept_id,
                label: d.dept_name,
              });
              if (e.data.result.length == k + 1) {
                cb(true);
              }
            });
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      } catch (error) {
        cb(false);
      }
    },
    getBarands(cb) {
      try {
        this.$axios
          .get("/crBarand/active", {
            headers: {
                Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
                // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
                // eyJ1c2VyTmFtZSI6ImNvbXAiLCJpc3MiOiJyZWguZ28udGgi
                // LCJpYXQiOjE3MDAxOTM3MDIsImV4cCI6MTcwMDc5ODUwMn0.
                // wX0uSPoH4VKS1mZlKNlm-jJY8TAFPBaZaycyUkFiFYY`,
              },
          })
          .then((e) => {
            // console.log(e.data);
            // this.$session.set("XXX", value);
            e.data.result.map((b, k) => {
              this.barands.push({
                id: b.barand_id,
                label: b.barand_name,
              });
              if (e.data.result.length == k + 1) {
                cb(true);
              }
            });
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการค้นหาข้อมูล");
            }
          });
      } catch (error) {
        cb(false);
      }
    },

    createOrUpdateClicked(flag) {
      this.$Progress.start();
      let data = {};
      data.com_name = this.comData.com_name;
      data.com_no = this.comData.com_no;
      data.com_serial_no = this.comData.com_serial_no;
      data.com_number = this.comData.com_number;
      data.com_depart = this.deptsSellected ? this.deptsSellected.id : null;
      data.com_depart_addr = this.comData.com_depart_addr;
      data.com_barand = this.barandsSellected ? this.barandsSellected.id : null;
      data.com_cpu = this.cpusSellected ? this.cpusSellected.id : null;
      data.com_ram = this.ramsSellected ? this.ramsSellected.id : null;
      data.com_harddisk = this.hhdsSellected ? this.hhdsSellected.id : null;
      data.com_stystem = this.winsSellected ? this.winsSellected.id : null;
      data.com_ip = this.comData.com_ip;
      // console.log(data);
      if (flag == "create") {
        if (
          !data.com_name ||
          !data.com_serial_no ||
          !data.com_number ||
          !data.com_depart ||
          !data.com_depart_addr ||
          !data.com_barand ||
          !data.com_cpu ||
          !data.com_ram ||
          !data.com_harddisk ||
          !data.com_stystem ||
          !data.com_ip
        ) {
          this.$Progress.fail();
          this.$noty.warning("กรุณากรอกข้อมูลให้ครบถ้วน");
        } else {
          this.create(data, (err) => {
            // console.log(err,res);
            if (!err) {
              this.$Progress.finish();
              this.$noty.success("บันทึกข้อมูลสำเร็จ");
              setTimeout(() => {
                this.$router.push("/search");
              }, 2000);
            } else {
              this.$Progress.fail();
              this.$noty.error("บันทึกข้อมูลไม่สำเร็จกรุณาลองใหม่อีกครั้ง");
            }
          });
        }
      } else {
        if (
          !data.com_name ||
          !data.com_no ||
          !data.com_serial_no ||
          !data.com_number ||
          !data.com_depart ||
          !data.com_depart_addr ||
          !data.com_barand ||
          !data.com_cpu ||
          !data.com_ram ||
          !data.com_harddisk ||
          !data.com_stystem ||
          !data.com_ip
        ) {
          this.$Progress.fail();
          this.$noty.warning("กรุณากรอกข้อมูลให้ครบถ้วน");
        } else {
          this.update(this.com_id, data, (err) => {
            // console.log(err,res);
            if (!err) {
              this.$Progress.finish();
              this.$noty.success("บันทึกข้อมูลสำเร็จ");
              setTimeout(() => {
                this.$router.push("/search");
              }, 2000);
            } else {
              this.$Progress.fail();
              this.$noty.error("บันทึกข้อมูลไม่สำเร็จกรุณาลองใหม่อีกครั้ง");
            }
          });
        }
      }
    },
    update(id, data, cb) {
      try {
        this.$axios
          .put(
            "/crProductSurvey/" + id + "/edit",
            {
              com_name: data.com_name,
              com_no: data.com_no,
              com_serial_no: data.com_serial_no,
              com_number: data.com_number,
              com_depart: data.com_depart,
              com_depart_addr: data.com_depart_addr,
              com_barand: data.com_barand,
              com_cpu: data.com_cpu,
              com_ram: data.com_ram,
              com_harddisk: data.com_harddisk,
              com_stystem: data.com_stystem,
              com_ip: data.com_ip,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
                // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
                // eyJ1c2VyTmFtZSI6ImNvbXAiLCJpc3MiOiJyZWguZ28udGgi
                // LCJpYXQiOjE3MDAxOTM3MDIsImV4cCI6MTcwMDc5ODUwMn0.
                // wX0uSPoH4VKS1mZlKNlm-jJY8TAFPBaZaycyUkFiFYY`,
              },
            }
          )
          .then((e) => {
            cb(false, e);
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการแก้ไขข้อมูล");
            }
            cb(err, null);
          });
      } catch (error) {
        cb(error, null);
      }
    },

    create(data, cb) {
      try {
        this.$axios
          .post(
            "/crProductSurvey",
            {
              com_name: data.com_name,
              com_serial_no: data.com_serial_no,
              com_number: data.com_number,
              com_depart: data.com_depart,
              com_depart_addr: data.com_depart_addr,
              com_barand: data.com_barand,
              com_cpu: data.com_cpu,
              com_ram: data.com_ram,
              com_harddisk: data.com_harddisk,
              com_stystem: data.com_stystem,
              com_ip: data.com_ip,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
                // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
                // eyJ1c2VyTmFtZSI6ImNvbXAiLCJpc3MiOiJyZWguZ28udGgi
                // LCJpYXQiOjE3MDAxOTM3MDIsImV4cCI6MTcwMDc5ODUwMn0.
                // wX0uSPoH4VKS1mZlKNlm-jJY8TAFPBaZaycyUkFiFYY`,
              },
            }
          )
          .then((e) => {
            cb(false, e);
          })
          .catch((err) => {
            //  userไม่ถูก
            // console.log(err);
            // console.log("Can't get this api,", err);
            if (err.code == "ERR_BAD_REQUEST") {
              this.$noty.error("คุณไม่มีสิทธ์ในการเพิ่มข้อมูล");
            }
            cb(err, null);
          });
      } catch (error) {
        cb(error, null);
      }
    },
    addTextClicked(text, type) {
      this.addText = text;
      this.addType = type;
    },
  },
};
</script>

<style></style>
