<template>
    <div class="min-h-screen py-20 bg-primary text-secondary">
        <div class="max-w-screen-lg mx-auto px-4 lg:px-0">
            <div class="flex flex-wrap items-center">
                <div class="lg:w-5/12 p-6">
                    <h2 id="hubungi" class="text-4xl font-bold mb-3">Dapatkan penawaran menarik dari kami</h2>
                    <div class="flex flex-col gap-2">
                        <p>Hubungi:</p>
                        <a
                            href="https://api.whatsapp.com/send?phone=6285711112016"
                            class="flex gap-2 hover:translate-x-2 duration-200"><i
                                class="bi bi-whatsapp"></i><span>Rusli</span><span> 0281-1125-9029</span>
                            </a>
                        <a href="https://api.whatsapp.com/send?phone=6289636192223"
                            class="flex gap-2 hover:translate-x-2 duration-200"><i
                                class="bi bi-whatsapp"></i><span>Wahyudi</span><span> 0896-3619-2223</span>
                            </a>

                    </div>
                    <img src="@/assets/caleg-2.png" alt="" srcset="" class="mx-auto w-full">
                </div>
                <div class="lg:w-7/12 p-6">
                    <div class="p-6 border border-secondary rounded-lg shadow-xl">
                        <div>
                            <div><span class="mb-3 block"> Silakan isi form di bawah ini</span>
                                <hr class="mb-6 border-secondary">
                                <form>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        <div class="form-group mb-5"><label for="nama">Nama</label><input type="text"
                                                name="nama"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"
                                                required></div>
                                        <div class="form-group mb-5"><label for="email">Email</label><input type="email"
                                                name="email"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"
                                                required></div>
                                    </div>
                                    <div class="form-group mb-5"><label for="phone">Hp</label><input type="phone"
                                            name="phone"
                                            class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"></div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        <div class="form-group mb-5"><label for="dapil">Dapil</label><input type="text"
                                                name="dapil"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"></div>
                                        <div class="form-group mb-5"><label for="partai">Partai</label><input
                                                type="text" name="partai"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"><small
                                                class="text-light">Opsional (Boleh tidak di isi)</small></div>
                                    </div>
                                    <div class="form-group mb-5"><textarea name="pesan" id="" cols="30" rows="6"
                                            class="rounded-lg w-full bg-light bg-opacity-10 text-white p-3"></textarea>
                                    </div><button type="submit"
                                        class="rounded-lg py-3 px-5 bg-secondary text-primary font-semibold hover:bg-opacity-70 duration-200">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>