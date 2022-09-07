<script>
import { PhoneOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        PhoneOutlined,
    }
}
</script>

<template>
    <div class="footer">
        <div class="container">
            <div class="row ">
                <div class="col col-md-4">
                    <div class="footer__list">
                        <h5 class="footer__title footer__logo">
                            <img src="https://file.hstatic.net/200000525917/file/logo-scofield-while_2d1f4117bd8d4867acc370cb4b35e531.png"
                                alt="">
                        </h5>

                        <div class="footer__info footer__info-contact d-flex align-items-center">
                            <img src="../assets/image/footer/footer.png" alt="">
                            <span class="pl-3">Hợp tác với chúng tôi</span>
                        </div>
                    </div>
                </div>
                <div class="col col-md-4">
                    <div class="footer__list">
                        <h5 class="footer__title">Giới thiệu</h5>
                        <div class="footer__info">
                            <span> Khu II, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, thành phố Cần Thơ,
                                Việt
                                Nam
                                <br />
                            </span>
                            <span>
                                <!-- <phone-outlined /> -->
                                0123789456
                                <br />
                            </span>
                            <span>
                                lntthanh3317@gmail.com
                                <br />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col col-md-4">
                    <div class="footer__list">
                        <h5 class="footer__title">HỖ TRỢ KHÁCH HÀNG</h5>
                        <div class="footer__info">
                            <span> Gửi yêu cầu bảo hành
                                <br />
                            </span>
                            <span>
                                Gửi yêu cầu đổi trả
                                <br />
                            </span>
                            <span>
                                P. Hỗ trợ khách hàng: lntthanh3317@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__coppyright">
            <div class="container">
                <span>
                    © Copyright 2022 By lntthanh3317
                </span>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use '../scss/' as *;

.footer {
    background: url('../assets/image/footer/footer-bg.jpg');
    padding: 20px 0 8px;

    &__info {

        &-contact {
            margin-top: 20px;
            width: fit-content;
            padding: 8px 12px;
            border: 2px solid $white-color;
            border-radius: 12px;
        }
    }

    & span,
    & h5 {
        color: $white-color;
    }

    & span {
        font-size: 14px;
    }

    &__coppyright {
        margin-top: 20px;

        & span {
            padding-top: 8px;
            border-top: 1px solid $white-color;
        }
    }
}
</style>