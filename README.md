## Description
在 Google Chrome 116.0.5845.96 版本之前，對 XML 中不受信任的輸入驗證不足，導致遠端攻擊者能夠誘導使用者進入設計過的 HTML 頁面並讀取到用戶的敏感文件。

**漏洞編號**: CVE-2023-4357

### Severity Level
Medium

### Affected Software and Hardware

| Software            | Version                          |
|---------------------|----------------------------------|
| debian/chromium     | <= 90.0.4430.212-1~deb10u1       |
| Google Chrome       | < 116.0.5845.96                  |
| Debian Linux        | -                                |
| Fedoraproject Fedora| = 11.0, 12.0                     |
| Microsoft Edge      | < 116.0.1938.54                  |

## Environment

我在進行 CVE-2023-4357 漏洞復現時，使用的環境如下：

| 環境       | 版本                             |
|------------|----------------------------------|
| Ubuntu     | 22.04.4                          |
| Chrome     | 114.0.5735.90 (linux64)          |

我使用 VMware 安裝虛擬機，並在虛擬機中安裝了 Ubuntu。接著，使用 `wget` 指令下載 Chrome：

```bash
wget https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/114.0.5735.90/linux64/chrome-linux64.zip
