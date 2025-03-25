import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"
import Image from "next/image";

export type QRScanProps = {
    qr: string;
}

export function QRScanComponent({ qr }: QRScanProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">
                    <QrCode />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="">
                {/* <ResponsiveTableComponent certificates={alternative_suppliers} /> */}
                <AlertDialogHeader>
                    <AlertDialogTitle>{qr ? "Scan to see further product information" : "No QR Available"}</AlertDialogTitle>
                    {qr && <AlertDialogDescription>
                        <Image
                            src={`/qr-code/${qr}`}
                            alt="Placeholder Image"
                            width={500}
                            height={500}
                            priority
                        />
                    </AlertDialogDescription>
                    }
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
