import jscookie from 'js-cookie'



// generate function tha will save a cookie if not exist
const setCookieifNotExists = (cname, cvalue, exdays) =>
{
    const currentCookies = jscookie.get(cname)
    console.log("currentCookies", currentCookies)

    if (!currentCookies) {

        jscookie.set(cname, cvalue , { expires: 1/48, domain: 'upo.cl' })
        console.log("currentCookies Set New ", currentCookies)
    }
}












export default {
    setCookieifNotExists
}