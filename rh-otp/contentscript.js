if(window.location.href.includes("openshiftapps.com/oauth/authorize")) {
    document.getElementsByClassName("pf-c-button")[0].click();
}

if(window.location.href.includes("gitlab.cee.redhat.com/users/sign_in")) {
    console.log("click saml login button");
    document.getElementsByClassName("qa-saml-login-button")[0].click();
}

