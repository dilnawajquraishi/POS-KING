const express = require("express")
const mongoose = require("mongoose")
const db = require("./dataBaseConfig.js")

const cors = require("cors")
const dotenv = require("dotenv")


dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static('uploads'))
app.use(cors())

db().then(async () => {

   
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })


    const productRoute = require('./routes/productRoute.js')

    const salesReport = require('./routes/salesReport.js')


    const categoryRoute = require('./routes/categoryRoute.js')

    const employeeRoute = require('./routes/addEmployeeRoute.js')

    const addressRoute = require('./routes/addAddressRoute.js')

    const administratorRoute = require('./routes/administratorRoute.js')

    const ProductReportRoute = require('./routes/ProductReport.js')

    const PosRoute = require('./routes/posRoutes.js')

    const purchage = require('./routes/productRoute.js')

    const SaleDetails = require('./routes/SalesDetailsRoute.js')


    const orderStas = require('./routes/OrderState.js')


    const setting = require('./routes/Setting.js')


    const settingEmail = require('./routes/SettingMail.js')


    const settingTax = require('./routes/SettingTax.js')


    const AdministratorCategory = require('./routes/AdministratorCategory.js')


    const AdministratorAddress = require('./routes/administratorAddressRoute.js')










    app.use('/api', orderStas)
    

    app.use('/api', productRoute)


    app.use('/api', categoryRoute)


    app.use('/api', employeeRoute)


    app.use('/api', administratorRoute)


    app.use('/api', addressRoute)


    app.use('/api', salesReport)


    app.use('/api', ProductReportRoute)

    app.use('/api', PosRoute)

    app.use('/api',     purchage)


    app.use('/api',   SaleDetails)


    app.use('/api', setting)


    app.use('/api', settingEmail)


    app.use('/api',     settingTax )


    app.use('/api', AdministratorCategory)


    app.use('/api',   AdministratorAddress )








    



    

})
.catch(err => console.log(err))