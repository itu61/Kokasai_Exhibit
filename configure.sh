#!/bin/bash

ifaces=$(ls /sys/class/net | grep "^w")
sed -i "s/<interfaces>/${ifaces}/g" "./hostapd.conf"
sed -i "s/<interfaces>/${ifaces}/g" "./dnsmasq.conf"

mv /etc/hostapd/hostapd.conf ./hostapd.conf.old
mv /etc/dnsmasq.conf ./dnsmasq.conf.old
mv ./hostapd.conf /etc/hostapd/hostapd.conf
mv ./dnsmasq.conf /etc/dnsmasq.conf

ip addr add dev wlp5s0 192.168.10.1/24
hostapd /etc/hostapd/hostapd.conf -B
dnsmasq -d
npx vite --host


