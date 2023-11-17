<template>
  
  <div class="container " style="min-height: 300px;">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <div class="hello">
    <!-- <img alt="Vue logo" src="../assets/00.png"> -->
    <div class="mb-3">
      <!-- ************************************* -->
<label for="input-datalist">รหัสคอมพิวเตอร์</label>
<input type="text" class="form-control" id="formGroupExampleInput"
 placeholder="C66100001">
</div>
<div class="mb-3">
<label for="input-datalist">ชื่อคอมพิวเตอร์</label>
<input type="text" class="form-control" id="formGroupExampleInput2"
 placeholder="REH6610001">
</div>
<!-- ********************************************* -->
<label for="input-datalist">แรม</label>

<div class="row">
<div class="col-9">
  <select class="form-select" aria-label="Default select example">
<option selected>DDR2 2 GB</option>
<option value="1">DDR2 4 GB</option>
<option value="2">DDR2 8 GB</option>
<option value="3">DDR2 16 GB</option>
<flex-wra></flex-wra>
</select>
</div>
<div class="col-3">
  <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" 
  data-bs-target="#exampleModal1"><i class="bi bi-download" style="font-size:18px"></i></button>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title" id="exampleModalLabel">เพิ่มแรม</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
    </div>
    <div class="modal-footer">
      <div class="d-grid gap-2 col-4 mx-auto">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      <button type="submit" class="btn btn-outline-info">save</button>
    </div>
    </div>
  </div>
</div>
</div>


</div>
<!-- **************************************************** -->

<label for="input-datalist">ฮาร์ดดิส</label>

<div class="row">
<div class="col-9">
  <select class="form-select" aria-label="Default select example">
<option selected>HHD 512 GB</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<flex-wra></flex-wra>
</select>
</div>
<div class="col-3">
  <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" 
  data-bs-target="#exampleModal"><i class="bi bi-download" style="font-size:18px"></i></button>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title" id="exampleModalLabel">เพิ่มฮาร์ดดิส</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
    </div>
    <div class="modal-footer">
      <div class="d-grid gap-2 col-4 mx-auto">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      <button type="submit" class="btn btn-outline-info">save</button>
    </div>
    </div>
  </div>
</div>
</div>

</div>
<!-- ***************************************** -->
<label for="input-datalist">ชื่อพีซียู</label>

<div class="row">
<div class="col-9">
  <select class="form-select" aria-label="Default select example">
<option selected>intel core i3 2100</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<flex-wra></flex-wra>
</select>
</div>
<div class="col-3">
  <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" 
  data-bs-target="#exampleModal2"><i class="bi bi-download" style="font-size:18px"></i></button>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title" id="exampleModalLabel">เพิ่มชื่อพีซียู</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
    </div>
    <div class="modal-footer">
      <div class="d-grid gap-2 col-4 mx-auto">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      <button type="submit" class="btn btn-outline-info">save</button>
    </div>
    </div>
  </div>
</div>
</div>
</div>
<!-- **************************************** -->
<label for="input-datalist">วินโดวส์</label>

<div class="row">
<div class="col-9">
  <select class="form-select" aria-label="Default select example">
<option selected>windows 10 pro</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<flex-wra></flex-wra>
</select>
</div>
<div class="col-3">
  <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" 
  data-bs-target="#exampleModal3"><i class="bi bi-download" style="font-size:18px"></i></button>

</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal3" tabindex="" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title" id="exampleModalLabel">เพิ่มวินโดวส์</h2>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
    </div>
    <div class="modal-footer">
      <div class="d-grid gap-2 col-4 mx-auto">
      <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      <button type="submit" class="btn btn-outline-info">save</button>
    </div>
    </div>
  </div>
</div>
</div>
</div>
<!-- ******************************************* -->
<label for="input-datalist">หน่วยงาน</label>

<div class="row">
<div class="col-12">
  <select class="form-select" aria-label="Default select example">
<option selected>ศูนย์คอมพิวเตอร์</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="3">4</option>
<option value="3">5</option>
<option value="3">6</option>

<flex-wra></flex-wra>
</select>
</div>

</div>
<!-- ***************************************** -->
<div class="form-group">
  <label for="input-datalist">ไอพี</label>
  <input type="text" class="form-control" placeholder="192.168.1.1" list="list-timezone" id="input-datalist">
  <datalist id="list-timezone">
  </datalist>
</div>
<label for="input-datalist"></label>




<div class="d-grid gap-2 col-6 mx-auto">
<button type="submit" class="btn btn-outline-success">บันทึกข้อมูล</button>
<button type="button" class="btn btn-outline-danger" onclick="history.back()">ย้อนกลับ</button>
</div>


</div>
  </div>
</template>

<!-- <script>
export default {
  name: "AboutView",
  props: {
    msg: String,
  },
};
</script>



<style >
  
  
</style> -->

  
