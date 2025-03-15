import os
import yaml
from datetime import datetime
import json

def parse_markdown_metadata(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # 找出 front matter (metadata)
    front_matter = None
    if content.startswith('---'):
        end_of_front_matter = content.find('---', 3)  # 找到結束的 '---'
        front_matter = content[3:end_of_front_matter].strip()  # 擷取 front matter

    if front_matter:
        # 使用 yaml 解析 metadata
        metadata = yaml.safe_load(front_matter)

        # 解析 date 為日期物件並轉換為字串
        if 'date' in metadata:
            try:
                # 轉換為 YYYY-MM-DD 格式的字符串
                metadata['date'] = datetime.strptime(metadata['date'], "%Y-%m-%d").strftime("%Y-%m-%d")
            except ValueError:
                metadata['date'] = None  # 如果日期格式錯誤則設為 None

        # 解析 tags 為列表
        if 'tags' in metadata:
            metadata['tags'] = [tag.strip() for tag in metadata['tags'].split(',')]

        # 加入檔案的 path (去掉副檔名)
        metadata['path'] = os.path.splitext(os.path.basename(file_path))[0]

        return metadata
    return {}

def save_metadata_to_json(metadata_list, output_path):
    with open(output_path, 'w', encoding='utf-8') as json_file:
        json.dump(metadata_list, json_file, indent=4, ensure_ascii=False)

def get_markdown_files(directory):
    """遍歷指定資料夾，取得所有的 markdown 文件"""
    markdown_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                markdown_files.append(os.path.join(root, file))
    return markdown_files

def process_folder(folder_name, directory, output_folder):
    # 取得資料夾中的所有 markdown 文件
    markdown_files = get_markdown_files(directory)

    # 儲存該資料夾的所有 metadata
    all_metadata = []
    for markdown_file in markdown_files:
        metadata = parse_markdown_metadata(markdown_file)
        if metadata:  # 如果有 metadata 才加入
            all_metadata.append(metadata)

    # 輸出該資料夾的 metadata 為 JSON 檔案
    output_json = os.path.join(output_folder, f"{folder_name}_metadata.json")
    save_metadata_to_json(all_metadata, output_json)
    print(f"Metadata for {folder_name} saved to {output_json}")

if __name__ == "__main__":
    # 定義資料夾和輸出目錄
    input_root_directory = "../public/article"  # 根目錄路徑
    output_folder = "../public/metadata"  # 輸出資料夾

    # 依次處理 life, program, travel 資料夾
    for folder_name in ["life", "program", "travel", "leetcode"]:
        directory = os.path.join(input_root_directory, folder_name)
        process_folder(folder_name, directory, output_folder)

    print("All metadata has been processed.")