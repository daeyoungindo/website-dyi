Add-Type -AssemblyName System.Drawing

$w = 1120
$h = 400
$fmt = [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
$bmp = New-Object System.Drawing.Bitmap $w, $h, $fmt
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::Transparent)

$dyiFont = New-Object System.Drawing.Font 'Arial Black', 110, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
$hwaFont = New-Object System.Drawing.Font 'Arial Black', 72, ([System.Drawing.FontStyle]::Bold -bor [System.Drawing.FontStyle]::Italic), ([System.Drawing.GraphicsUnit]::Pixel)
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Far
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

$dyiBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(209, 213, 219))
$hwaBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(59, 130, 246))
$rectTop = New-Object System.Drawing.RectangleF 40, 20, 1040, 170
$rectBot = New-Object System.Drawing.RectangleF 40, 190, 1040, 160

$g.DrawString('DYI', $dyiFont, $dyiBrush, $rectTop, $sf)
$g.DrawString('HWASEUNG', $hwaFont, $hwaBrush, $rectBot, $sf)

$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root 'public\images\logo\logo.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$dyiFont.Dispose()
$hwaFont.Dispose()
$dyiBrush.Dispose()
$hwaBrush.Dispose()
$sf.Dispose()

Write-Output "Saved $out"
Get-Item $out | Format-Table Name, Length -AutoSize
