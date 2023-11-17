<template>
  <div>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="exampleModalLabel">{{ msg }}</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              v-model="text"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-grid gap-2 col-4 mx-auto">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
            <button @click="addClicked" class="btn btn-outline-primary" data-bs-dismiss="modal">
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddWorld",
  props: {
    msg: String,
    type: String,
  },
  data() {
    return {
      text: "",
      url: "",
      param: {},
    };
  },
  methods: {
    addClicked() {
      this.$Progress.start();
      if (!this.text) {
        this.$Progress.fail();
        this.$noty.warning("กรุณากรอกข้อมูลให้ครบถ้วน");
      } else {
        this.add((res) => {
          if (res) {
            this.save(this.url, this.param, (err) => {
              if (err) {
                this.$Progress.fail();
                this.$noty.error("บันทึกข้อมูลไม่สำเร็จกรุณาลองใหม่อีกครั้ง");
              } else {
                this.$Progress.finish();
                this.$noty.success("บันทึกข้อมูลสำเร็จ");
                this.text = "";
                this.$parent.loadPage();
              }
            });
          }
        });
      }
    },
    add(cb) {
      switch (this.type) {
        case "rams":
          this.url = "/crRam";
          this.param = {
            rams_name: this.text,
          };
          cb(true);
          break;
        case "hhds":
          this.url = "/crHardDisk";
          this.param = {
            harddisk_name: this.text,
          };
          cb(true);
          break;
        case "cpus":
          this.url = "/crCpu";
          this.param = {
            harddisk_name: this.text,
          };
          cb(true);
          break;
        case "wins":
          this.url = "/crSytem";
          this.param = {
            system_name: this.text,
          };
          cb(true);
          break;
        case "barands":
          this.url = "/crBarand";
          this.param = {
            barand_name: this.text,
          };
          cb(true);
          break;
      }
    },
    save(url, data, cb) {
      try {
        this.$axios
          .post(url, data, {
            headers: {
              Authorization: `Bearer ${this.$root.$children[0].deToken(
                  this.$cookies.get("TOKEN")
                )}`,
            },
          })
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
  },
};
</script>

<style></style>
