RedHat OTP VPN Auto Connect
===========================

USAGE OF THIS IS YOUR OWN PROBLEM

ONLY A PROOF OF CONCEPT, SHOULD NOT BE USED

install::

    https://github.com/paolostivanin/OTPClient    
    expect


configure::

    # your otpclient pw
    # this unlocks the otpclinet db
    echo "<<PW>>" > pw
    
    # this is the account name under 
    # otpclient-cli list
    echo "<<OAUTH.......>>" > oauth

    # your rh key
    echo "<<KEY>>" > key
    
    # connect uuid
    nmcli con show
    echo "<<connection uuid>>" >> uuid


run it::

    ./vpn-connect

RedHat OTP Chrome Plugin
========================

install::

    Google chrome
    pip3 install fastapi uvicorn


configure::

    Go to extenions
    load unpacked
    point it at the rh-otp folder


run::

    cd src_folder
    uvicorn main:app --reload

run at boot::

    cp -rv .config/autostart/*.desktop ~/.conf/autostart/


verify::

    curl -vv http://localhost:8000


usage::

    In the extenions in the top right hand of the browser, pin the redhat icon.
    Hit the redhat button when on auth.redhat.com and it will fill in the password box

