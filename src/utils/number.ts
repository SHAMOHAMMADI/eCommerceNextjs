import { NextRequest, NextResponse  } from "next/server"

export function formatNumberWithCommas (number: number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}


