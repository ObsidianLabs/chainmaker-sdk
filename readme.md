#

[google grpc example](https://grpc.io/docs/languages/node/basics/)

[node grpc ssl](https://github.com/gbahamondezc/node-grpc-ssl)

[grpc server credential IF](https://grpc.github.io/grpc/node/grpc.ServerCredentials.html)



# rsa self sign ca
openssl genrsa -out ca-key.pem -des 1024

openssl req -new -key ca-key.pem -out ca-csr.pem -password:baas2021

openssl x509 -req -days 3650 -in ca-csr.pem -signkey ca-key.pem -out ca-cert.pem -password:baas2021


## server cert
openssl genrsa -out server-key.pem 1024 
openssl req -new -key server-key.pem -config openssl.cnf -out server-csr.pem
openssl x509 -req -days 730 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -in server-csr.pem -out server-cert.pem -extensions v3_req -extfile openssl.cnf


```openssl.cnf
[req]
    distinguished_name = req_distinguished_name
    req_extensions = v3_req

    [req_distinguished_name]
    countryName = Country Name (2 letter code)
    countryName_default = CN
    stateOrProvinceName = State or Province Name (full name)
    stateOrProvinceName_default = BeiJing
    localityName = Locality Name (eg, city)
    localityName_default = YaYunCun
    organizationalUnitName	= Organizational Unit Name (eg, section)
    organizationalUnitName_default	= Domain Control Validated
    commonName = Internet Widgits Ltd
    commonName_max	= 64

    [ v3_req ]
    # Extensions to add to a certificate request
    basicConstraints = CA:FALSE
    keyUsage = nonRepudiation, digitalSignature, keyEncipherment
    subjectAltName = @alt_names

    [alt_names]
    DNS.1 = ns1.dns.com
    DNS.2 = ns2.dns.com
    DNS.3 = ns3.dns.com
    IP.1 = 192.168.1.84
    IP.2 = 127.0.0.1
    IP.3 = 127.0.0.2
```

## client cert

openssl genrsa -out client-key.pem
openssl req -new -key client-key.pem -out client-csr.pem
openssl x509 -req -days 365 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -in client-csr.pem -out client-cert.pem